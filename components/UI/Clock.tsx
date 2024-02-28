import { useContext} from "react"
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI"
import { convertDateToTime } from "../../utils/FormatDate"
import { StyleSheet, Text } from "react-native"

const Clock = () => {
	const {currentlyWeather, setNewDate} = useContext(WeatherOWAPIDataContext)

	// setInterval(setNewDate,  30000)

	return (
		<Text style={style.time}>{convertDateToTime(currentlyWeather.time)}</Text>
	)
}

const style = StyleSheet.create({
	time: {
		position: "absolute",
		fontSize: 24,
		zIndex:100,
		color: "white",
		textAlign: "right",
		top: 85,
		left: 320,
	}
})

export default Clock