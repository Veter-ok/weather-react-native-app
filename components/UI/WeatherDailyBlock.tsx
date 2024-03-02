import {FunctionComponent as FC, useContext} from "react";
import { WeatherDataContext} from "../../context/WeatherDataProvider";
import { convertDateToStringDate } from "../../utils/FormatDate";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export const WeatherDailyBlock:FC = () => {
	const {dailyWeather} = useContext(WeatherDataContext)

	return (
		<ScrollView horizontal>
			{dailyWeather.temperatures_max.slice(0, 6).map((value, index) => 
				<View key={index} style={styles.block}>
					<View>
						<Text style={{fontSize: 24, textAlign: 'center'}}>{convertDateToStringDate(dailyWeather.times[index])}</Text>
						<Text style={{fontSize: 18, textAlign: 'center', marginTop: 10}}>from {Math.round(dailyWeather.temperatures_min[index])} to {Math.round(dailyWeather.temperatures_max[index])}°C</Text>
					</View>
					<View style={{marginTop: 10}}>
						<Text style={{fontSize: 15, textAlign: 'center'}}>Wind: E {dailyWeather.windspeed[index]}km/h</Text>
					</View>
				</View>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	block: {
		marginVertical: 20,
		marginRight: 40,
		padding: 20,
		height: 150,
		borderRadius: 10,
		shadowOffset: {width: 4, height: 8},
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 1,
		shadowRadius: 11,
		backgroundColor: "white",
	}
})

export default WeatherDailyBlock