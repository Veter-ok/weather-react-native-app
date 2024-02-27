import {FunctionComponent as FC, useContext} from "react";
// import { DarkModeContext } from "../../../context/DarkModeProvider";
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI";
import { CityType } from "../../types/CityTypes";
import { convertDateToTime } from "../../utils/FormatDate";
import { StyleSheet, Text, View } from "react-native";

interface IPropsContent {
	city: CityType
}


export const WeatherMainBlock:FC<IPropsContent> = ({city}) => {
	const {currentlyWeather} = useContext(WeatherOWAPIDataContext)
	// const darkMode = useContext(DarkModeContext)

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
			<View>
				<Text style={style.text}>Sunrise: {convertDateToTime(currentlyWeather.sunrise)}</Text>
				<Text style={style.text}>Sunset: {convertDateToTime(currentlyWeather.sunset)}</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	block: {
		top: -85,
		width: 300,
		height: 230,
		backgroundColor: "white",
		shadowOffset: {width: 4, height: 8},
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 1,
		shadowRadius: 11,
		// box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
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
	}
})

export default WeatherMainBlock