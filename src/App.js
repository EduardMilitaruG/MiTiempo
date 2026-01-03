import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "19ce86b535f4988d4477c82a2da19be1";

  const fetchWeather = async (city) => {
    setError(null);
    setWeatherData(null);
    setForecastData(null);
    setLoading(true);

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        ),
      ]);

      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error("City not found");
      }

      const weather = await weatherResponse.json();
      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Weather Dashboard</h1>

        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {weatherData && <WeatherCard data={weatherData} />}

        {forecastData && <ForecastCard forecast={forecastData} />}
      </div>
    </div>
  );
}

export default App;
