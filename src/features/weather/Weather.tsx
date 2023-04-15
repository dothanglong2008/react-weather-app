import { useAppDispatch, useAppSelector } from "../../routes/app/hooks";
import styles from "./Weather.module.scss";
import { selectWeather } from "./weatherSlice";

interface WeatherProps {}

function Weather() {
  const weather = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Weather}>
      <header className={styles.flex}>
        <div>
          <h1>React App Weather</h1>
        </div>
        <div>Search Bar</div>
      </header>
      <main className={styles.flex}></main>
    </div>
  );
}

export default Weather;
