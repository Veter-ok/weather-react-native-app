import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { WeatherDataProvider } from './context/WeatherDataProvider';
import { SearchCity } from './components/UI/SearchCity';
import PictureScreen from './components/screens/PictureScreen';
import Content from './components/content/content';
import { WeatherDataOWAPIProvider } from './context/WeatherDataProviderOWAPI';

export default function App() {
  const [city, setCity] = useState({
    cityName: "Moscow",
    coordinates: {lat: 55.78, lon: 37.56},
  })
  
  return (
    <WeatherDataProvider coordinates={city.coordinates}>
      <WeatherDataOWAPIProvider city={city}>
        <SafeAreaView>
          <ScrollView style={{top: -50}}>
            <SearchCity setCity={setCity}/>
            <PictureScreen city={city}/>
            <Content city={city}/>
          </ScrollView>
        </SafeAreaView>
      </WeatherDataOWAPIProvider>
    </WeatherDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
