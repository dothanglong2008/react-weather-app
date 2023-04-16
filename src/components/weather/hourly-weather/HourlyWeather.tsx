import { useAppSelector } from "../../../app/hooks";
import { selectWeatherData } from "../../../features/weather/weatherSlice";
import useFetchWeatherByLocation from "../../../hooks/useFetchWeatherByLocation";
import SectionHeading from "../../ui/elements/section-heading/SectionHeading";
import TextBox from "../../ui/elements/text-box/TextBox";
import Item from "../item/Item";

function HourlyWeather() {
  useFetchWeatherByLocation();
  const weatherData = useAppSelector(selectWeatherData);

  let hourlyForecast = <></>;
  if (weatherData.status === "loading") {
    hourlyForecast = <p>Loading...</p>;
  } else if (weatherData.status === "succeeded") {
    hourlyForecast = (
      <ul>
        {weatherData?.forecast?.forecastday[0].hour
          .filter(
            (hour) => hour.time_epoch >= weatherData.current.last_updated_epoch
          )
          .map((hour) => {
            const table = [
              { field: "RealFeel", value: hour.feelslike_c },
              { field: "Wind", value: hour.wind_kph },
              { field: "Wind Gust", value: hour.gust_kph },
              { field: "Humidity", value: hour.humidity },
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
  } else if (weatherData.status === "failed" || weatherData.status === "idle") {
    hourlyForecast = <TextBox content={<>No data to display</>} />;
  }

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
