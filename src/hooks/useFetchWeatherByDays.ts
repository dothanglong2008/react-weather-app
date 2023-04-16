import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchWeatherData } from "../features/weather/weatherSlice";
import { API_KEY } from "../constants/constants";

const useFetchWeatherByDays = (days: number) => {
  const location = useAppSelector((state) => state.weather.location);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
    dispatch(fetchWeatherData(url));
  }, [days, dispatch, location]);
};

export default useFetchWeatherByDays;
