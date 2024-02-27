import React, {FunctionComponent as FC, useContext, useEffect, useState, createContext} from "react";
import Clouds from "../UI/clouds/clouds";
// import Rainfall from "../drawing/rainfall/rainfall";
import {WeatherOWAPIDataContext} from '../../context/WeatherDataProviderOWAPI'
// import SnowFall from "../UI/showFall/snowFall";
import Luminary from "../UI/luminary";
import Hill from "../drawing/hill";
import { CityType } from "../../types/CityTypes";
import { StyleSheet, Text, View } from "react-native";
import Clock from "../UI/Clock";

interface IPictureThemeContext {
	timeOfDay: "morning" | "day"| "evening" | "night",
	cloudCover: "clear" | "overcast",
	season: "winter" | "summer"
}

export const PictureThemeContext = createContext<IPictureThemeContext>({
	timeOfDay: "day",
	cloudCover: "clear",
	season: "summer"
})

interface IPropsPictureScreen {
	city: CityType
}

const PictureScreen:FC<IPropsPictureScreen> = ({city}) => {
	const {currentlyWeather} = useContext(WeatherOWAPIDataContext)
	const [timeOfDay, setTimeOfDay] = useState<"morning" | "day"| "evening" | "night">("day")
	const [cloudCover, setCloudcover] = useState<"clear" | "overcast">("clear")
	const [season, setSeason] = useState< "winter" | "summer">("summer")

	useEffect(() => {
		const time = currentlyWeather.time
		const sunset = currentlyWeather.sunset
		const sunrise = currentlyWeather.sunrise
		const day = new Date(sunrise)
		day.setHours(sunrise.getHours() + 2)
		const evening = new Date(sunset)
		evening.setHours(sunset.getHours() - 2)

		if (currentlyWeather.snowDepth > 0.05){
			setSeason('winter')
		}else{
			setSeason('summer')
		}

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
	}, [cloudCover, currentlyWeather.cloudcover, currentlyWeather.snowDepth, currentlyWeather.sunrise, currentlyWeather.sunset, currentlyWeather.time, season, timeOfDay])
	
	return (
		<PictureThemeContext.Provider value={{timeOfDay: timeOfDay, cloudCover: cloudCover, season: season}}>
			<View style={StyleSheet.compose(style.frame, cloudCover == "overcast" ? style.overcatBackground : style[timeOfDay])}>
				<Clock/>
				<Luminary timeOfDay={timeOfDay} cloudcover={currentlyWeather.cloudcover}/>
				{/* <Rainfall rain={currentlyWeather.rain} weather={currentlyWeather.weather}/>
				<SnowFall snowFall={currentlyWeather.snowfall}/>
				<Clouds/> */}
				<Hill type={`${season}-${timeOfDay}-${cloudCover}`}/>
			</View>
		</PictureThemeContext.Provider>
	)
}
export default PictureScreen

const style = StyleSheet.create({
	frame: {
		zIndex: 0,
		width: "100%",
		top: -50,
		height: 500,
		overflow: "hidden",
	},
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