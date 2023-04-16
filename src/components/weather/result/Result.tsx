import HourlyWeather from "../hourly-weather/HourlyWeather";
import DailyWeather from "../daily-weather/DailyWeather";
import Section from "../../ui/containers/section/Section";
import useAutoRefreshWeather from "../../../hooks/useAutoRefreshWeather";

function Result() {
  useAutoRefreshWeather();

  return (
    <>
      <Section>
        <HourlyWeather />
      </Section>
      <Section>
        <DailyWeather />
      </Section>
    </>
  );
}

export default Result;
