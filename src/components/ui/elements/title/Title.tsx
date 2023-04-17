import styles from "./Title.module.scss";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Title() {
  return (
    <h1 className={styles.title}>
      <TiWeatherPartlySunny />
      <span>React Weather App</span>
    </h1>
  );
}

export default Title;
