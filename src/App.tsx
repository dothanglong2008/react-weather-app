import styles from "./App.module.scss";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <div className={styles.app}>
      <Weather />
    </div>
  );
}

export default App;
