import { useAppSelector } from "../../../app/hooks";
import { selectWeatherData } from "../../../features/weather/weatherSlice";
import useFetchWeatherByLocation from "../../../hooks/useFetchWeatherByLocation";
import SectionHeading from "../../ui/elements/section-heading/SectionHeading";
import TextBox from "../../ui/elements/text-box/TextBox";
import Item from "../item/Item";
import { useDeferredValue, useMemo } from "react";

function HourlyWeather() {
  useFetchWeatherByLocation();
  const weatherData = useAppSelector(selectWeatherData);

  const deferWeatherData = useDeferredValue(weatherData);

  const hourlyForecast = useMemo(() => {
    if (deferWeatherData.current.last_updated_epoch === 0) {
      return <TextBox content={<>Loading...</>} />;
    } else if (
      deferWeatherData.status === "succeeded" ||
      deferWeatherData.status === "loading"
    ) {
      return (
        <ul>
          {deferWeatherData?.forecast?.forecastday[0].hour
            .filter(
              (hour) =>
                hour.time_epoch >= deferWeatherData.current.last_updated_epoch
            )
            .map((hour) => {
              const table = [
                { field: "RealFeel", value: hour.feelslike_c },
                { field: "Wind", value: hour.wind_kph },
                { field: "Wind Gust", value: hour.gust_kph },
                { field: "Humidity", value: hour.humidity },
                { field: "Chance Of Rain", value: hour.chance_of_rain },
                { field: "Dew Point", value: hour.dewpoint_c },
                { field: "UV", value: hour.uv },
              ];

              return (
                <Item
                  key={hour.time_epoch}
                  time={hour.time.split(" ")[1]}
                  icon={hour.condition.icon}
                  temp={hour.temp_c}
                  humidity={hour.humidity}
                  chanceOfRain={hour.chance_of_rain}
                  extraTable={table}
                />
              );
            })}
        </ul>
      );
    } else if (
      deferWeatherData.status === "failed" ||
      deferWeatherData.status === "idle"
    ) {
      return <TextBox content={<>No data to display</>} />;
    }
  }, [deferWeatherData]);

  return (
    <>
      <SectionHeading
        content={<>Hourly Weather Forecast For {weatherData.location.name}</>}
      />
      {hourlyForecast}
    </>
  );
}

export default HourlyWeather;
