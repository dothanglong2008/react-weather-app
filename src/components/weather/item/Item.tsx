import { useState } from "react";
import styles from "./Item.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface HourlyItemProps {
  time: string;
  icon: string;
  temp: number;
  humidity: number;
  chanceOfRain: number;
  extraTable: Array<{ field: string; value: string | number }>;
}

function Item({
  time,
  icon,
  temp,
  humidity,
  chanceOfRain,
  extraTable,
}: HourlyItemProps) {
  const [extra, setExtra] = useState(false);
  return (
    <>
      <li
        className={styles.itemContainer}
        onClick={() => {
          setExtra((extra) => !extra);
        }}
      >
        <table className={styles.primary}>
          <tbody className={styles.primaryBody}>
            <tr className={styles.primaryRow}>
              <td>
                <strong>{time}</strong>
              </td>
              <td className={styles.condition}>
                <span className={styles.icon}>
                  <img src={icon} alt="weather icon" />
                </span>
                <strong>{temp}&#8451;</strong>
              </td>
              <td className={styles.humidity}>{humidity}</td>
              <td className={styles.rain}>{chanceOfRain}%</td>
              <td className={styles.arrow}>
                {extra ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </td>
            </tr>
          </tbody>
        </table>
        {extra && (
          <table className={styles.extra}>
            <tbody className={styles.extraBody}>
              {extraTable.map((data) => (
                <tr key={data.field} className={styles.extraRow}>
                  <td>{data.field}</td>
                  <td>{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </li>
    </>
  );
}

export default Item;
