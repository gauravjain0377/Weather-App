import { useState } from 'react';
import InfoBox from './infoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState( {
    city: "Jaipur",
    feelsLike: 35.13,
    humidity: 13,
    temp: 37.72,
    tempMax: 37.72,
    tempMin: 37.72,
    weather: "clear sky",
   });

   let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
   }

  return (
    <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
  )
}
