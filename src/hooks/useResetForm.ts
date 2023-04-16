import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeLocationField } from "../components/weather/search/searchFormSlice";

const useResetForm = () => {
  const weatherData = useAppSelector((state) => state.weather.weatherData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (weatherData.status === "succeeded") {
      dispatch(changeLocationField(""));
    }
  }, [dispatch, weatherData.status]);
};

export default useResetForm;
