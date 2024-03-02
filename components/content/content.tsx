import React, {FunctionComponent as FC, useContext } from "react";
import WeatherMainBlock from "../UI/weatherMainBlock";
// import { DarkModeContext } from "../../context/DarkModeProvider";
import { CityType } from "../../types/CityTypes";
import { Text, View } from "react-native";
import WeatherHourlyBlock from "../UI/WeatherHourlyBlock";
// import WeatherDailyBlock from "../UI/WeatherDailyBlock/WeatherDailyBlock";

interface IPropsContent {
	city: CityType
}

export const Content:FC<IPropsContent> = ({city}) => {

	return (
		<View>
			<WeatherMainBlock city={city}/>
			<Text style={{fontSize: 24, top: -50}}>Hourly Weather</Text>
			<WeatherHourlyBlock/>
			<Text style={{fontSize: 24, top: -50}}>Daily Weather</Text>
			{/* <WeatherDailyBlock/> */}
		</View>
	)
}

export default Content