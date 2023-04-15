import styles from "./Item.module.scss";

interface ItemProps {
  last_updated?: string;
  last_updated_epoch?: number;
  temp_c?: number;
  temp_f?: number;
  feelslike_c?: number;
  feelslike_f?: number;
  condition?: {
    text?: string;
    icon?: string;
    code?: number;
  };
  wind_mph?: number;
  wind_kph?: number;
  wind_degree?: number;
  wind_dir?: string;
  pressure_mb?: number;
  pressure_in?: number;
  precip_mm?: number;
  precip_in?: number;
  humidity?: number;
  cloud?: number;
  is_day?: number;
  uv?: number;
  gust_mph?: number;
  gust_kph?: number;
}

function Item({
  last_updated,
  condition,
  temp_c,
  temp_f,
  feelslike_c,
  uv,
  precip_mm,
}: ItemProps) {
  return (
    <article className={styles.item}>
      <h1 className={styles.item}>CURRENT WEATHER</h1>
      <p className={styles.item}>{last_updated}</p>
      <h2 className={styles.item}>
        <span className={styles.item}>{condition?.icon}</span>
        <span className={styles.item}>{temp_c}</span>
        <span className={styles.item}>&#8451;</span>
        <span className={styles.item}>RealFeel</span>
        <span className={styles.item}>{feelslike_c}</span>
      </h2>
      <p className={styles.item}>
        <span className={styles.item}>{temp_f}</span>
        <span className={styles.item}>&#8457;</span>
      </p>
      <p className={styles.item}>{condition?.text}</p>
      <div className={styles.item}>
        <table className={styles.item}>
          <tbody className={styles.item}>
            <tr className={styles.item}>
              <th className={styles.item}>Max UV Index</th>
              <td className={styles.item}>{uv}</td>
              <th className={styles.item}>Precipitation</th>
              <td className={styles.item}>{precip_mm}</td>
            </tr>
            <tr className={styles.item}>
              <th className={styles.item}>Wind</th>
              <td className={styles.item}>{uv}</td>
              <th className={styles.item}>Rain</th>
              <td className={styles.item}>{precip_mm}</td>
            </tr>
            <tr className={styles.item}>
              <th className={styles.item}>Wind Gusts</th>
              <td className={styles.item}>{uv}</td>
              <th className={styles.item}>Hours of Precipitation</th>
              <td className={styles.item}>{precip_mm}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default Item;
