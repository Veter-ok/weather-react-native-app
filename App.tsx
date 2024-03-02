import { Fragment, useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { WeatherDataProvider } from './context/WeatherDataProvider';
import { SearchCity } from './components/UI/SearchCity';
import PictureScreen from './components/screens/PictureScreen';
import Content from './components/content/content';
import { WeatherDataOWAPIProvider, WeatherOWAPIDataContext } from './context/WeatherDataProviderOWAPI';

export default function App() {

  const [city, setCity] = useState({
    cityName: "Moscow",
    coordinates: {lat: 55.78, lon: 37.56},
  })
  
  return (
    <WeatherDataProvider coordinates={city.coordinates}>
      <WeatherDataOWAPIProvider city={city}>
        <Fragment> 
          <SafeAreaView style={{flex: 0, backgroundColor: "red"}}/>
          <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <ScrollView>
              <SearchCity setCity={setCity}/>
              <PictureScreen/>
              <Content city={city}/>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      </WeatherDataOWAPIProvider>
    </WeatherDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
