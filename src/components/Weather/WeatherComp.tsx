import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { weatherReducer } from "../../redux/ExtraRedusers/WeatherExtraReduser";
import { useSelector } from "react-redux";
import "./Weather.css";
import { useNavigate } from "react-router";

export interface IWeather {
  lat: number;
  lon: number;
}

const WeatherComp = () => {
  const [location, setLocation] = useState<IWeather | null>(null);
  const weather = useSelector((state: RootState) => state.weather);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    location && appDispatch(weatherReducer(location!));
  }, [location]);

  return weather.weatherData ? (
    <div className="weather-container">
      <div className="city">📍 עיר: {weather.weatherData.name}</div>
      <h1 className="weather-title">מזג האוויר</h1>

      <img
        src={`${import.meta.env.VITE_WEATHER_API_ICON_URL}/${
          weather.weatherData.weather[0].icon
        }@2x.png`}
        alt="weather icon"
        className="weather-icon"
      />
      <div className="temp">
        {Number.parseInt(weather.weatherData.main.temp.toString())}° מעלות
      </div>
      <p className="description">
        {weather.weatherData.weather[0].description}
      </p>

      <div className="weather-grid">
        <div>🌡️ מינימלית: {weather.weatherData.main.temp_min}°C</div>
        <div>🌡️ מקסימלית: {weather.weatherData.main.temp_max}°C</div>
        <div>🥵 מורגשת: {weather.weatherData.main.feels_like}°C</div>
        <div>💧 לחות: {weather.weatherData.main.humidity}%</div>
        <div>🌫️ ראות: {weather.weatherData.visibility} מטר</div>
        <div>🌬️ רוח: {weather.weatherData.wind.speed} מ'/ש'</div>
        <div>☁️ עננות: {weather.weatherData.clouds.all}%</div>
        <div>
          🌅 זריחה:{" "}
          {new Date(
            weather.weatherData.sys.sunrise * 1000
          ).toLocaleTimeString()}
        </div>
        <div>
          🌇 שקיעה:{" "}
          {new Date(weather.weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </div>
        <div>
          📅 תאריך:{" "}
          {new Date(weather.weatherData.dt * 1000).toLocaleDateString()}
        </div>
        <div className="updated">
          🕒 עודכן ב־
          {new Date(weather.weatherData.dt * 1000).toLocaleTimeString()}
        </div>
      </div>
    </div>
  ) : weather.loading ? (
    <div className="loading-container">
      <div className="loading">טוען...</div>
    </div>
  ) : (
    <div className="error-container">
      <div className="error">שגיאה בטעינת מזג האוויר</div>
    </div>
  );
};

export default WeatherComp;
