import axios from "axios";

export async function getWeatherByLocation(url: string) {
  return await axios.get(url);
}

