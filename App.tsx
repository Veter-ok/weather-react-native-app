import { useState } from 'react';
import { WeatherDataProvider } from './context/WeatherDataProvider';
import { WeatherDataOWAPIProvider } from './context/WeatherDataProviderOWAPI';
import Content from './components/content/content';

export default function App() {

  const [city, setCity] = useState({
    cityName: "Moscow",
    coordinates: {lat: 55.78, lon: 37.56},
  })
  
  return (
    <WeatherDataProvider coordinates={city.coordinates}>
      <WeatherDataOWAPIProvider city={city}>
       <Content city={city} setCity={setCity}/>
      </WeatherDataOWAPIProvider>
    </WeatherDataProvider>
  );
}