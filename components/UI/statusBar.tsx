import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI"
import { useContext, useEffect, useState } from "react"

const CustomStatusBar = () => {
	const {currentlyWeather} = useContext(WeatherOWAPIDataContext)
	const [timeOfDay, setTimeOfDay] = useState<"morning" | "day"| "evening" | "night">("day")
	const [cloudCover, setCloudcover] = useState<"clear" | "overcast">("clear")

	useEffect(() => {
		const time = currentlyWeather.time
		const sunset = currentlyWeather.sunset
		const sunrise = currentlyWeather.sunrise
		const day = new Date(sunrise)
		day.setHours(sunrise.getHours() + 2)
		const evening = new Date(sunset)
		evening.setHours(sunset.getHours() - 2)

		if (currentlyWeather.cloudcover <= 100 && currentlyWeather.cloudcover >= 90 ){
			setCloudcover('overcast')
		}else{
			setCloudcover('clear')
		}

		if (time > sunrise && time <= day){
			setTimeOfDay('morning')
		}
		else if (time > day && time <= evening){
			setTimeOfDay('day')
		}else if (time > evening && time <= sunset){
			setTimeOfDay('evening')
		}else{
			setTimeOfDay('night')
		}
	}, [currentlyWeather.sunrise, currentlyWeather.sunset, currentlyWeather.time])

	return (
		<View style={StyleSheet.compose({height: StatusBar.currentHeight}, (cloudCover == "overcast" && timeOfDay !== "night")? style.overcatBackground : style[timeOfDay])}>
            <SafeAreaView>
              <StatusBar translucent barStyle="light-content"/>
            </SafeAreaView>
        </View>
	)
}

const style = StyleSheet.create({
	overcatBackground: {
		backgroundColor: "rgb(79, 83, 94)"
	},
	morning: {
		backgroundColor: "rgb(154, 167, 206)",
	},
	day: {
		backgroundColor: "rgb(65, 106, 218)",
	},
	evening: {
		backgroundColor: "rgb(104, 114, 142)",
	},
	night: {
		backgroundColor: "rgb(27, 34, 54)",
	},
})

export default CustomStatusBar