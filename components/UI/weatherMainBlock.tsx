import {FunctionComponent as FC, useContext} from "react";
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI";
import { CityType } from "../../types/CityTypes";
import { convertDateToTime } from "../../utils/FormatDate";
import { StyleSheet, Text, View } from "react-native";

interface IPropsContent {
	city: CityType
}


export const WeatherMainBlock:FC<IPropsContent> = ({city}) => {
	const {currentlyWeather} = useContext(WeatherOWAPIDataContext)

	return (
		<View style={style.block}>
			<View>
				<Text style={style.cityName}>{city.cityName}</Text>
				<Text style={style.temperature}>{currentlyWeather.temperature}°C</Text>
				<Text style={style.weather}>{currentlyWeather.weather}</Text>
			</View>
			<View>
				<Text style={style.text}>Wind: E {currentlyWeather.windSpeed}km/h</Text>
				<Text style={style.text}>Humidity: {currentlyWeather.humidity}%</Text>
				<Text style={style.text}>Cloudcover {currentlyWeather.cloudcover}%</Text>
			</View>
			<View style={style.timeBlock}>
				<Text style={style.text}>Sunrise: {convertDateToTime(currentlyWeather.sunrise)}</Text>
				<Text style={style.text}>Sunset: {convertDateToTime(currentlyWeather.sunset)}</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	block: {
		justifyContent: 'center',
		top: -50,
		width: "80%",
		height: 240,
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "white",
		shadowOffset: {width: 4, height: 8},
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 1,
		shadowRadius: 11,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
	},
	cityName: {
		textAlign: "center",
		fontSize: 32
	},
	temperature: {
		textAlign: "center",
		fontSize: 32
	},
	weather: {
		width: "100%",
		fontSize: 20,
		fontWeight: "400",
		textAlign: "center",
		marginTop: 10,
		marginBottom: 10,
	},
	timeBlock: {
		top: 10,
		bottom: 10
	}
})

export default WeatherMainBlock