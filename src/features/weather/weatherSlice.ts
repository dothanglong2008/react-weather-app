import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./weatherAPI";
import { RootState } from "../../app/store";

export interface WeatherData {
  status: "idle" | "loading" | "succeeded" | "failed";
  current: {
    last_updated_epoch: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      date_epoch: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        avghumidity: number;
        uv: number;
      };
      hour: Array<{
        time: string;
        time_epoch: number;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        chance_of_rain: number;
        feelslike_c: number;
        wind_kph: number;
        gust_kph: number;
        humidity: number;
        dewpoint_c: number;
        uv: number;
      }>;
    }>;
  };
  location: {
    name: string;
  };
}

export interface WeatherState {
  location: string;
  days: number;
  weatherData: WeatherData;
}

export const initialState: WeatherState = {
  location: "",
  days: 5,
  weatherData: {
    status: "idle",
    current: {
      last_updated_epoch: 0,
    },
    forecast: {
      forecastday: [
        {
          date: "",
          date_epoch: "",
          day: {
            avgtemp_c: 0,
            maxtemp_c: 0,
            mintemp_c: 0,
            condition: {
              text: "",
              icon: "",
            },
            daily_chance_of_rain: 0,
            maxwind_kph: 0,
            totalprecip_mm: 0,
            avghumidity: 0,
            uv: 0,
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
              chance_of_rain: 0,
              feelslike_c: 0,
              wind_kph: 0,
              gust_kph: 0,
              humidity: 0,
              dewpoint_c: 0,
              uv: 0,
            },
          ],
        },
      ],
    },
    location: {
      name: "",
    },
  },
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (url: string) => {
    return fetchData(url);
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    incrementDays: (state) => {
      state.days += 5;
    },
    decrementDays: (state) => {
      state.days -= 5;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchWeatherData.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.weatherData = action.payload;
          state.weatherData.status = "succeeded";
        }
      )
      .addCase(fetchWeatherData.pending, (state) => {
        state.weatherData.status = "loading";
      })
      .addCase(fetchWeatherData.rejected, (state) => {
        state.weatherData.status = "failed";
      });
  },
});

export const { changeLocation, incrementDays, decrementDays } =
  weatherSlice.actions;

export const selectLocation = (state: RootState) => state.weather.location;
export const selectDays = (state: RootState) => state.weather.days;
export const selectWeatherData = (state: RootState) =>
  state.weather.weatherData;

export default weatherSlice.reducer;
