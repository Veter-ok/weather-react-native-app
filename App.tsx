import { useState } from 'react';
import {ScrollView} from 'react-native';
import { WeatherDataProvider } from './context/WeatherDataProvider';
import { SearchCity } from './components/UI/SearchCity';
import PictureScreen from './components/screens/PictureScreen';
import Content from './components/content/content';
import { WeatherDataOWAPIProvider } from './context/WeatherDataProviderOWAPI';
import CustomStatusBar from './components/UI/statusBar';

export default function App() {

  const [city, setCity] = useState({
    cityName: "Moscow",
    coordinates: {lat: 55.78, lon: 37.56},
  })
  
  return (
    <WeatherDataProvider coordinates={city.coordinates}>
      <WeatherDataOWAPIProvider city={city}>
        <CustomStatusBar/>
          <ScrollView>
            <SearchCity setCity={setCity}/>
            <PictureScreen/>
            <Content city={city}/>
          </ScrollView>
      </WeatherDataOWAPIProvider>
    </WeatherDataProvider>
  );
}