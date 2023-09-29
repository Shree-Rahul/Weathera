import "./App.css";
import Search from "./components/search/search";
import Weather from "./components/currentWeather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responce) => {
        const weatherResponce = await responce[0].json();
        const forecastResponce = await responce[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponce });
        setForecast({ city: searchData.label, ...forecastResponce });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="max-w-3xl min-h-fit rounded-sm bg-slate-800 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
      <Weather data={currentWeather}/>
      <Forecast data={forecast}/>
    </div>
  );
}

export default App;
