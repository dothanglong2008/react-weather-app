import { useAppSelector } from "../../app/hooks";
import Footer from "../../components/ui/containers/footer/Footer";
import Header from "../../components/ui/containers/header/Header";
import Main from "../../components/ui/containers/main/Main";
import Sidebar from "../../components/ui/containers/sidebar/Sidebar";
import Heading from "../../components/ui/elements/heading/Heading";
import TextBox from "../../components/ui/elements/text-box/TextBox";
import Result from "../../components/weather/result/Result";
import SearchForm from "../../components/weather/search/SearchForm";
import { selectLocation } from "./weatherSlice";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Weather() {
  const location = useAppSelector(selectLocation);
  return (
    <>
      <Header>
        <>
          <Heading
            content={
              <>
                <TiWeatherPartlySunny />
                <span>React Weather App</span>
              </>
            }
          />
          <Sidebar>
            <SearchForm />
          </Sidebar>
        </>
      </Header>

      <Main>
        {location ? (
          <Result />
        ) : (
          <>
            <TextBox content={<>Search for a city or get current location</>} />
          </>
        )}
      </Main>

      <Footer>
        <TextBox
          content={
            <>
              <span>API Source: </span>
              <a href="https://www.weatherapi.com/">weatherapi.com</a>
            </>
          }
        />
      </Footer>
    </>
  );
}

export default Weather;
