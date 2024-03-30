import {FunctionComponent as FC, useContext} from "react";
import { WeatherDataContext} from "../../context/WeatherDataProvider";
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI";
import { ICurrentlyWeatherData } from "../../types/weatherDataType";
import { convertDateToTime } from "../../utils/FormatDate";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export const WeatherHourlyBlock:FC = () => {
	const {hourlyWeather} = useContext(WeatherDataContext)
	const {currentlyWeather, setCurrentlyWeather, time} = useContext(WeatherOWAPIDataContext)
	const firstIndex = time.getHours()

	const newCurrentlyWeanter = (index: number):ICurrentlyWeatherData => {
		return {
			time: hourlyWeather.times[index],
			sunrise: currentlyWeather.sunrise,
			sunset: currentlyWeather.sunset,
			weather: currentlyWeather.weather,
			temperature: hourlyWeather.temperatures[index],
			humidity: hourlyWeather.humidity[index],
			windSpeed: hourlyWeather.windSpeed[index],
			cloudcover: hourlyWeather.cloudcover[index],
			rain: hourlyWeather.rain[index],
			snowfall: hourlyWeather.snowfall[index],
			snowDepth: hourlyWeather.snow_depth[index]
		}
	}

	return (
		<ScrollView horizontal style={{padding: 20}}>
			{hourlyWeather.temperatures.slice(firstIndex, firstIndex + 6).map((value, index) => 
				<View key={index} style={styles.block} onTouchStart={() => setCurrentlyWeather(newCurrentlyWeanter(firstIndex + index))}>
					<View>
						<Text style={{fontSize: 24, textAlign: 'center'}}>{convertDateToTime(hourlyWeather.times[firstIndex + index])}</Text>
						<Text style={{fontSize: 18, textAlign: 'center'}}>{Math.round(hourlyWeather.temperatures[firstIndex + index])}°C</Text>
					</View>
					<View style={{marginTop: 10}}>
						<Text style={{fontSize: 15, textAlign: 'center'}}>Wind: E {hourlyWeather.windSpeed[firstIndex + index]}km/h</Text>
						<Text style={{fontSize: 15, textAlign: 'center'}}>Humidity: {hourlyWeather.humidity[firstIndex + index]}%</Text>
					</View>
				</View>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	block: {
		marginVertical: 15,
		marginRight: 40,
		padding: 20,
		height: "80%",
		width: "15%",
		borderRadius: 10,
		shadowOffset: {width: 10, height: 8},
		shadowColor: 'rgba(0, 0, 0, 0.3)',
		// shadowColor: 'black',
		elevation: 5,
		shadowOpacity: 2,
		shadowRadius: 10,
		backgroundColor: "white",
	}
})

export default WeatherHourlyBlock