import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { weatherReducer } from "../../redux/ExtraRedusers/WeatherExtraReduser";
import { useSelector } from "react-redux";
import { WeatherResponse } from "../../redux/Types/initialState";
import "./Weather.css";

export interface IWeather {
  lat: number;
  lon: number;
}

const WeatherComp = () => {
  const appDispatch = useAppDispatch();
  const weather: WeatherResponse | null = useSelector(
    (state: RootState) => state.weather.weatherData
  );
  const [location, ] = useState<IWeather | null>({
    lat: 32.0853,
    lon: 34.7818,
  });

  useEffect(() => {
    appDispatch(weatherReducer(location!));
  }, [location]);

  return (
    weather && (
      <div className="weather-container">
        <h1 className="weather-title">מזג האוויר</h1>

        <img
          src={`${import.meta.env.VITE_WEATHER_API_ICON_URL}/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="weather-icon"
        />
        <p className="description">{weather.weather[0].description}</p>

        <div className="weather-grid">
          <div>🌡️ טמפרטורה: {weather.main.temp}°C</div>
          <div>🌡️ מינימלית: {weather.main.temp_min}°C</div>
          <div>🌡️ מקסימלית: {weather.main.temp_max}°C</div>
          <div>🥵 מורגשת: {weather.main.feels_like}°C</div>
          <div>💧 לחות: {weather.main.humidity}%</div>
          <div>🌫️ ראות: {weather.visibility} מטר</div>
          <div>🌬️ רוח: {weather.wind.speed} מ'/ש'</div>
          <div>☁️ עננות: {weather.clouds.all}%</div>
          <div>🌅 זריחה: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</div>
          <div>🌇 שקיעה: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</div>
          <div>📍 עיר: {weather.name}</div>
          <div>📅 תאריך: {new Date(weather.dt * 1000).toLocaleDateString()}</div>
          <div className="updated">🕒 עודכן ב־{new Date(weather.dt * 1000).toLocaleTimeString()}</div>
        </div>
      </div>
    )
  );
};

export default WeatherComp;
