function WeatherCard({ data }) {
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-main">
        <img src={icon} alt={data.weather[0].description} />
        <span className="temp">{Math.round(data.main.temp)}°C</span>
      </div>
      <p className="desc">{data.weather[0].description}</p>
      <div className="details">
        <div>
          <span>Feels like</span>
          <span>{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div>
          <span>Humidity</span>
          <span>{data.main.humidity}%</span>
        </div>
        <div>
          <span>Wind</span>
          <span>{data.wind.speed} m/s</span>
        </div>
        <div>
          <span>Pressure</span>
          <span>{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
