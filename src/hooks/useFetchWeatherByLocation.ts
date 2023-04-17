import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchWeatherData } from "../features/weather/weatherSlice";
import { API_KEY, MIN_DAYS } from "../constants/constants";

const useFetchWeatherByLocation = () => {
  const location = useAppSelector((state) => state.weather.location);
  const days = MIN_DAYS;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
    dispatch(fetchWeatherData(url));
  }, [days, dispatch, location]);
};

export default useFetchWeatherByLocation;
