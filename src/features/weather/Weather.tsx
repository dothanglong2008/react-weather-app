import { useEffect, useState } from "react";
import styles from "./Weather.module.scss";
import axios from "axios";

function Weather() {
  const [days, setDays] = useState(5);
  const [location, setLocation] = useState("");
  const [formData, setFormData] = useState({
    location: "auto:ip",
  });
  const [weatherData, setWeatherData] = useState({
    current: {
      last_updated_epoch: 0,
    },
    forecast: {
      forecastday: [
        {
          date: "",
          day: {
            maxtemp_c: 0,
            condition: {
              text: "",
              icon: "",
            },
          },
          hour: [
            {
              time: "",
              time_epoch: 0,
              temp_c: 0,
              condition: {
                text: "",
                icon: "",
              },
            },
          ],
        },
      ],
    },
    location: {
      name: "",
    },
  });
  useEffect(() => {
    console.log(new Date().getHours());
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=f529a3bab889487795743808231304&q=${formData.location}&days=${days}&aqi=no&alerts=no`
        );
        if (response) {
          console.log(response.data);
          setWeatherData(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
        }
      }
    };
    getData();
    setInterval(getData, 600000);
  }, [formData, days]);
  return (
    <>
      <header className={styles.header}>
        <h1>React Weather App</h1>
      </header>
      <aside className={styles.sidebar}>
        <section>
          <h2>Search {location}</h2>
          <form
            name="search"
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              setFormData({ location: location });
            }}
          >
            <input
              id="location"
              type="text"
              name="location"
              value={location}
              placeholder="Enter city name (Example: London)"
              className={styles.input}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
            <ul className={styles.suggestions}>
              <li>London</li>
              <li>Ho Chi Minh City</li>
            </ul>
            <button
              className={styles.button}
              onClick={() => {
                if ("geolocation" in navigator) {
                  navigator.geolocation.getCurrentPosition((position) => {
                    setLocation(
                      `${position.coords.latitude},${position.coords.longitude}`
                    );
                  });
                } else {
                  setLocation("auto:ip");
                }
              }}
            >
              Get Location
            </button>
            <button type="submit" className={styles.button}>
              Search
            </button>
          </form>
        </section>
      </aside>
      <main className={styles.main}>
        <section>
          <h2>Hourly Weather Forecast For {weatherData.location.name}</h2>
          <ul>
            {weatherData?.forecast?.forecastday[0].hour
              .filter(
                (hour) =>
                  hour.time_epoch >= weatherData.current.last_updated_epoch
              )
              .map((hour) => {
                return (
                  <li key={hour.time} className={styles.item}>
                    <span>
                      <img
                        src={
                          weatherData?.forecast?.forecastday[0].hour[0]
                            .condition.icon
                        }
                        alt="weather icon"
                        className={styles.icon}
                      />
                    </span>
                    <span>{hour.temp_c}&#8451;</span>
                    <span>{hour.time}</span>
                  </li>
                );
              })}
          </ul>
        </section>
        <section>
          <h2>Show X-day Weather Forecast For {weatherData.location.name}</h2>
          <ul>
            {weatherData?.forecast?.forecastday.map((forecastDay) => {
              return (
                <li key={forecastDay.date} className={styles.item}>
                  <span>
                    <img
                      src={forecastDay.day.condition.icon}
                      alt="weather icon"
                      className={styles.icon}
                    />
                  </span>
                  <span>{forecastDay.day.maxtemp_c}&#8451;</span>
                  <span>{forecastDay.date}</span>
                </li>
              );
            })}
          </ul>
          {days > 5 && (
            <button
              className={styles.button}
              onClick={() => {
                setDays((days) => days - 5);
              }}
            >
              Show less
            </button>
          )}
          <button
            className={styles.button}
            onClick={() => {
              setDays((days) => days + 5);
            }}
          >
            Show more
          </button>
        </section>
      </main>
      <footer className={styles.footer}>
        API Source: <a href="https://www.weatherapi.com/">weatherapi.com</a>
      </footer>
    </>
  );
}

export default Weather;
