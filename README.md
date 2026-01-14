# React Weather Dashboard

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)

A responsive weather dashboard built with React that displays current weather conditions and a 5-day forecast for any city worldwide. Fetches real-time data from the OpenWeatherMap API.

## Features

- **City Search** - Look up weather for any city globally
- **Current Conditions** - Temperature, humidity, wind speed, and weather description
- **5-Day Forecast** - Extended forecast with daily temperature ranges
- **Weather Icons** - Visual representation of weather conditions
- **Error Handling** - Graceful handling of invalid city names
- **Loading States** - Visual feedback during API requests
- **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **React 19** - UI framework with hooks
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Custom styling with animations
- **Create React App** - Project scaffolding

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-weather-dashboard.git
cd react-weather-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
react-weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # City search input
│   │   ├── WeatherCard.jsx    # Current weather display
│   │   └── ForecastCard.jsx   # 5-day forecast display
│   ├── App.js                 # Main application logic
│   ├── App.css                # Application styles
│   └── index.js               # Entry point
└── package.json
```

## How It Works

1. User enters a city name in the search bar
2. App fetches current weather and forecast data concurrently using `Promise.all`
3. Weather data is displayed with temperature, humidity, wind, and conditions
4. 5-day forecast shows daily weather predictions
5. Invalid cities display a user-friendly error message

## API Integration

The app uses two OpenWeatherMap endpoints:

- **Current Weather**: `/weather` - Real-time weather conditions
- **5-Day Forecast**: `/forecast` - 3-hour interval predictions

```javascript
const [weatherResponse, forecastResponse] = await Promise.all([
  fetch(`api.openweathermap.org/data/2.5/weather?q=${city}`),
  fetch(`api.openweathermap.org/data/2.5/forecast?q=${city}`)
]);
```

## Skills Demonstrated

- React functional components and hooks (useState)
- Async/await with concurrent API requests (Promise.all)
- Conditional rendering based on application state
- Error handling and user feedback
- Component-based architecture
- CSS styling and responsive design
- API integration and data transformation

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm test` | Launch test runner |
| `npm run build` | Create production build |

## Author

**Eduard Militaru**
- GitHub: [@EduardMilitaruG](https://github.com/EduardMilitaruG)
- LinkedIn: [Eduard Militaru](https://linkedin.com/in/eduardmilitaru)

## License

MIT License - Free for personal and educational use.

---

*Built as a portfolio project demonstrating React and API integration skills*
