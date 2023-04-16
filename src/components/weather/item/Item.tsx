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
        <div className={styles.primary}>
          <div>
            <strong>{time}</strong>
          </div>
          <div className={styles.condition}>
            <div>
              <img src={icon} alt="weather icon" className={styles.icon} />
            </div>
            <div>
              <strong>{temp}&#8451;</strong>
            </div>
          </div>
          <div>{humidity}</div>
          <div>{chanceOfRain}%</div>
          <div>{extra ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </div>
        {extra && (
          <table className={styles.extra}>
            <tbody className={styles.extraBody}>
              {extraTable.map((data) => (
                <tr className={styles.extraRow}>
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
