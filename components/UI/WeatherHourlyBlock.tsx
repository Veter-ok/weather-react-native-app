import {FunctionComponent as FC, useContext} from "react";
import { WeatherDataContext} from "../../context/WeatherDataProvider";
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI";
import { ICurrentlyWeatherData } from "../../types/weatherDataType";
import { convertDateToTime } from "../../utils/FormatDate";
import { Text, View } from "react-native";

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
		<View>
			{hourlyWeather.temperatures.slice(firstIndex, firstIndex + 6).map((value, index) => 
				<View key={index} onTouchStart={() => setCurrentlyWeather(newCurrentlyWeanter(firstIndex + index))}>
					<View>
						<Text>{convertDateToTime(hourlyWeather.times[firstIndex + index])}</Text>
						<Text>{Math.round(hourlyWeather.temperatures[firstIndex + index])}°C</Text>
					</View>
					<View>
						<Text>Wind: E {hourlyWeather.windSpeed[firstIndex + index]}km/h</Text>
						<Text>Humidity: {hourlyWeather.humidity[firstIndex + index]}%</Text>
					</View>
				</View>
			)}
		</View>
	)
}

export default WeatherHourlyBlock