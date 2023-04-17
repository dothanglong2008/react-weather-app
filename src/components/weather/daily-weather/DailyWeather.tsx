import { useDeferredValue, useMemo, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import useFetchWeatherByDays from "../../../hooks/useFetchWeatherByDays";
import { selectWeatherData } from "../../../features/weather/weatherSlice";
import SectionHeading from "../../ui/elements/section-heading/SectionHeading";
import styles from "./DailyWeather.module.scss";
import Item from "../item/Item";
import { DAYS_GAP, MAX_DAYS, MIN_DAYS } from "../../../constants/constants";
import TextBox from "../../ui/elements/text-box/TextBox";

function DailyWeather() {
  const [days, setDays] = useState(5);
  const weatherData = useAppSelector(selectWeatherData);
  useFetchWeatherByDays(days);
  const deferWeatherData = useDeferredValue(weatherData);

  const showMore = () => {
    setDays((days) => days + DAYS_GAP);
  };

  const showLess = () => {
    setDays((days) => days - DAYS_GAP);
  };

  let dailyForecast = useMemo(() => {
    if (deferWeatherData.current.last_updated_epoch === 0) {
      return <TextBox content={<>Loading...</>} />;
    } else if (
      deferWeatherData.status === "succeeded" ||
      deferWeatherData.status === "loading"
    ) {
      return (
        <>
          <ul>
            {deferWeatherData?.forecast?.forecastday.map((forecastDay) => {
              const table = [
                { field: "Min Temperature", value: forecastDay.day.maxtemp_c },
                { field: "Max Temperature", value: forecastDay.day.maxtemp_c },
                { field: "Max Wind", value: forecastDay.day.maxwind_kph },
                { field: "Humidity", value: forecastDay.day.avghumidity },
                {
                  field: "Chance Of Rain",
                  value: forecastDay.day.daily_chance_of_rain,
                },
                {
                  field: "Precipitation",
                  value: forecastDay.day.totalprecip_mm,
                },
                { field: "UV", value: forecastDay.day.uv },
              ];
              return (
                <Item
                  key={forecastDay.date_epoch}
                  time={forecastDay.date}
                  icon={forecastDay.day.condition.icon}
                  temp={forecastDay.day.avgtemp_c}
                  humidity={forecastDay.day.avghumidity}
                  chanceOfRain={forecastDay.day.daily_chance_of_rain}
                  extraTable={table}
                />
              );
            })}
          </ul>
          {days > MIN_DAYS && (
            <button className={styles.show} onClick={showLess}>
              Show less
            </button>
          )}
          {days < MAX_DAYS && (
            <button className={styles.show} onClick={showMore}>
              Show more
            </button>
          )}
        </>
      );
    } else if (deferWeatherData.status === "failed") {
      return <p>No data to display</p>;
    }
  }, [deferWeatherData, days]);

  return (
    <>
      <SectionHeading
        content={
          <>
            Next {days} Days Weather Forecast For{" "}
            {deferWeatherData.location.name}
          </>
        }
      />
      {dailyForecast}
    </>
  );
}

export default DailyWeather;
