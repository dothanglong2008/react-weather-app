import FooterContainer from "../../components/ui/containers/footer-container/FooterContainer";
import HeaderContainer from "../../components/ui/containers/header-container/HeaderContainer";
import MainContainer from "../../components/ui/containers/main-container/MainContainer";
import Result from "../../components/weather/result/Result";
import WeatherHeader from "../../components/weather/weather-header/WeatherHeader";
import WeatherFooter from "../../components/weather/weather-footer/WeatherFooter";

function Weather() {
  return (
    <>
      <HeaderContainer>
        <WeatherHeader />
      </HeaderContainer>

      <MainContainer>
        <Result />
      </MainContainer>

      <FooterContainer>
        <WeatherFooter />
      </FooterContainer>
    </>
  );
}

export default Weather;
