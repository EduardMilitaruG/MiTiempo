function ForecastCard({ forecast }) {
  const days = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 5);

  const getDay = (dt) => new Date(dt).toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-days">
        {days.map((d, i) => (
          <div key={i}>
            <span className="day">{getDay(d.dt_txt)}</span>
            <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}.png`} alt="" />
            <span className="hi">{Math.round(d.main.temp_max)}°</span>
            <span className="lo">{Math.round(d.main.temp_min)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;
