import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Input } from './components/UI/Input';
import { WeatherDataProvider } from './context/WeatherDataProvider';
import { SearchCity } from './components/UI/SearchCity';
import { CityType } from './types/CityTypes';
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
        <View style={styles.container}>
          <SearchCity setCity={setCity}/>
          <PictureScreen city={city}/>
          <Content city={city}/>
          {/* <Input value={text} onChange={setText} onKeyDown={setKey}/> */}
        </View>
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
