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
  const [location, setLocation] = useState<IWeather | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      });
    }
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    location && appDispatch(weatherReducer(location!));
  }, [location]);

  useEffect(() => { getLocation() }, [])

  return (
    weather && (
      <div className="weather-container">
        <div className="city">📍 עיר: {weather.name}</div>
        <h1 className="weather-title">מזג האוויר</h1>

        <img
          src={`${import.meta.env.VITE_WEATHER_API_ICON_URL}/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="weather-icon"
        />
        <div className="temp">{Number.parseInt(weather.main.temp.toString())}° מעלות</div>
        <p className="description">{weather.weather[0].description}</p>

        <div className="weather-grid">
          <div>🌡️ מינימלית: {weather.main.temp_min}°C</div>
          <div>🌡️ מקסימלית: {weather.main.temp_max}°C</div>
          <div>🥵 מורגשת: {weather.main.feels_like}°C</div>
          <div>💧 לחות: {weather.main.humidity}%</div>
          <div>🌫️ ראות: {weather.visibility} מטר</div>
          <div>🌬️ רוח: {weather.wind.speed} מ'/ש'</div>
          <div>☁️ עננות: {weather.clouds.all}%</div>
          <div>🌅 זריחה: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</div>
          <div>🌇 שקיעה: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</div>
          <div>📅 תאריך: {new Date(weather.dt * 1000).toLocaleDateString()}</div>
          <div className="updated">🕒 עודכן ב־{new Date(weather.dt * 1000).toLocaleTimeString()}</div>
        </div>
      </div>
    )
  );
};

export default WeatherComp;
