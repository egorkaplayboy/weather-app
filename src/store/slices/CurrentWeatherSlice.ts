import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type Res = {
  status: number;
  message: string;
};

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Res;
};

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0
    }
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
    },
  },
});

export default currentWeatherSlice.reducer