import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchWeatherData } from "../features/weather/weatherSlice";
import { API_KEY } from "../constants/constants";

const useAutoRefreshWeather = () => {
  const location = useAppSelector((state) => state.weather.location);
  const days = useAppSelector((state) => state.weather.days);
  const weatherData = useAppSelector((state) => state.weather.weatherData);
  const dispatch = useAppDispatch();

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

  useEffect(() => {
    if (location.length > 0 && weatherData.status === "succeeded") {
      setInterval(() => {
        dispatch(fetchWeatherData(url));
      }, 600000);
    }
  }, [dispatch, location.length, url, weatherData.status]);
};

export default useAutoRefreshWeather;
