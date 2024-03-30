import { SafeAreaView, StatusBar, View } from "react-native"
import { WeatherOWAPIDataContext } from "../../context/WeatherDataProviderOWAPI"
import { useContext, useEffect, useState } from "react"
import { FunctionComponent as FC } from "react" 
import { backgroundColors } from "../../styles/colors"

interface ICustomStatusBar {
	backgroundColor: boolean
}

const CustomStatusBar:FC<ICustomStatusBar> = ({backgroundColor}) => {
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
	}, [currentlyWeather.sunrise, currentlyWeather.sunset, currentlyWeather.time, backgroundColor])



	return (
		<View style={[{height: StatusBar.currentHeight}]}>
            {/* <SafeAreaView> */}
              <StatusBar translucent barStyle="light-content" backgroundColor={backgroundColor ? "transparent" : backgroundColors[`${timeOfDay}-${cloudCover}`]}/>
            {/* </SafeAreaView> */}
        </View>
	)
}

export default CustomStatusBar