import styles from './WeatherFooter.module.scss';

function WeatherFooter() {
  return (
    <p className={styles.resource}>
      <span>API Source: </span>
      <a href="https://www.weatherapi.com/">weatherapi.com</a>
    </p>
  );
}

export default WeatherFooter;
