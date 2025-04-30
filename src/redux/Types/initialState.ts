import { PostType } from "./PostType";

export interface IinitialUserState {
    _id: null | string
    name: null | string
    email: null | string
    loading: boolean
    error: null | string
    success: boolean
}

export interface IinitialPostState {
    postList: null | PostType[]
    loading: boolean
    error: null | string
    success: boolean
}

export interface IinitialWeatherState {
    loading: boolean
    error: null | string
    success: boolean
    weatherData: null | WeatherResponse
}

export interface WeatherResponse {
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    name: string;
    sys: {
      sunrise: number;
      sunset: number;
    };
  }
  