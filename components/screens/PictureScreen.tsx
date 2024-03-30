import React, {FunctionComponent as FC, useContext, useEffect, useState, createContext} from "react";
import Clouds from "../UI/clouds";
import Rainfall from "../drawing/rainfall";
import {WeatherOWAPIDataContext} from '../../context/WeatherDataProviderOWAPI'
import Luminary from "../UI/luminary";
import Hill from "../drawing/hill";
import {StyleSheet, View } from "react-native";
import Clock from "../UI/Clock";
import SnowFall from "../drawing/snowFall";
import { backgroundColors } from "../../styles/colors";

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

const PictureScreen:FC = () => {
	const {currentlyWeather} = useContext(WeatherOWAPIDataContext)
	const [timeOfDay, setTimeOfDay] = useState<"morning" | "day"| "evening" | "night">("day")
	const [cloudCover, setCloudcover] = useState<"clear" | "overcast">("clear")
	const [season, setSeason] = useState< "winter" | "summer">("summer")
	const [isRain, setIsRain] = useState(false)

	useEffect(() => {
		const time = currentlyWeather.time
		const sunset = currentlyWeather.sunset
		const sunrise = currentlyWeather.sunrise
		const day = new Date(sunrise)
		day.setHours(sunrise.getHours() + 2)
		const evening = new Date(sunset)
		evening.setHours(sunset.getHours() - 2)

		if (currentlyWeather.weather){
			if (currentlyWeather.weather.includes("rain")){
				setIsRain(true)
			}
		}

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
	}, [cloudCover, currentlyWeather.cloudcover, currentlyWeather.snowDepth, currentlyWeather.sunrise, currentlyWeather.sunset, currentlyWeather.time, season])

	return (
		<PictureThemeContext.Provider value={{timeOfDay: timeOfDay, cloudCover: cloudCover, season: season}}>
			<View style={{height: 700, backgroundColor: backgroundColors[`${timeOfDay}-${cloudCover}`], top: -700, marginBottom: -700}}></View>
			<View style={[style.frame, {backgroundColor: backgroundColors[`${timeOfDay}-${cloudCover}`]}]}>
				{/* <Clock/> */}
				<Luminary timeOfDay={timeOfDay} cloudcover={currentlyWeather.cloudcover}/>
				{isRain ? <Rainfall weather={currentlyWeather.weather}/> : <></> }
				{currentlyWeather.snowfall > 0 ? <SnowFall weather={currentlyWeather.weather}/> : <></> }
				<Clouds/>
				<Hill type={`${season}-${timeOfDay}-${cloudCover}`}/>
			</View>
		</PictureThemeContext.Provider>
	)
}
export default PictureScreen

const style = StyleSheet.create({
	frame: {
		zIndex: -1,
		width: "100%",
		height: 520,
		overflow: "hidden",
	},
})