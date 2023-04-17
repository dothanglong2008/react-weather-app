import HourlyWeather from "../hourly-weather/HourlyWeather";
import DailyWeather from "../daily-weather/DailyWeather";
import useAutoRefreshWeather from "../../../hooks/useAutoRefreshWeather";
import { useAppSelector } from "../../../app/hooks";
import { selectLocation } from "../../../features/weather/weatherSlice";
import TextBox from "../../ui/elements/text-box/TextBox";
import SectionContainer from "../../ui/containers/section-container/SectionContainer";

function Result() {
  useAutoRefreshWeather();
  const location = useAppSelector(selectLocation);

  return location ? (
    <>
      <SectionContainer>
        <HourlyWeather />
      </SectionContainer>
      <SectionContainer>
        <DailyWeather />
      </SectionContainer>
    </>
  ) : (
    <SectionContainer>
      <TextBox content={<>Search for a city or get current location</>} />
    </SectionContainer>
  );
}

export default Result;
