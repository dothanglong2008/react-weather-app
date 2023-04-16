import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import useFetchWeatherByDays from "../../../hooks/useFetchWeatherByDays";
import { selectWeatherData } from "../../../features/weather/weatherSlice";
import SectionHeading from "../../ui/elements/section-heading/SectionHeading";
import styles from "./DailyWeather.module.scss";
import Item from "../item/Item";

function DailyWeather() {
  const [days, setDays] = useState(5);
  const weatherData = useAppSelector(selectWeatherData);
  useFetchWeatherByDays(days);

  let dailyForecast = <></>;
  if (weatherData.status === "loading") {
    dailyForecast = <p>Loading...</p>;
  } else if (weatherData.status === "succeeded") {
    dailyForecast = (
      <>
        <ul>
          {weatherData?.forecast?.forecastday.map((forecastDay) => {
            const table = [
              { field: "Min Temperature", value: forecastDay.day.maxtemp_c },
              { field: "Max Temperature", value: forecastDay.day.maxtemp_c },
              { field: "Max Wind", value: forecastDay.day.maxwind_kph },
              { field: "Humidity", value: forecastDay.day.avghumidity },
              { field: "Precipitation", value: forecastDay.day.totalprecip_mm },
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
        {days > 5 && (
          <button
            className={styles.show}
            onClick={() => {
              setDays((days) => days - 5);
            }}
          >
            Show less
          </button>
        )}
        {days < 20 && (
          <button
            className={styles.show}
            onClick={() => {
              setDays((days) => days + 5);
            }}
          >
            Show more
          </button>
        )}
      </>
    );
  } else if (weatherData.status === "failed") {
    dailyForecast = <p>No data to display</p>;
  }

  return (
    <>
      <section>
        <SectionHeading
          content={
            <>
              Next {days} Days Weather Forecast For {weatherData.location.name}
            </>
          }
        />
        {dailyForecast}
      </section>
    </>
  );
}

export default DailyWeather;
