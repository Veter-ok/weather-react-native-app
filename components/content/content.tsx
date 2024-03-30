import React, {FunctionComponent as FC, useContext } from "react";
import WeatherMainBlock from "../UI/weatherMainBlock";
import { CityType } from "../../types/CityTypes";
import { Text, View } from "react-native";
import WeatherHourlyBlock from "../UI/WeatherHourlyBlock";
import WeatherDailyBlock from "../UI/WeatherDailyBlock";

interface IPropsContent {
	city: CityType
}

export const Content:FC<IPropsContent> = ({city}) => {

	return (
		<View style={{backgroundColor: "white", marginTop: -50, paddingBottom: 60}}>
			<WeatherMainBlock city={city}/>
			<View style={{marginHorizontal: 20}}>
				<Text style={{fontSize: 24}}>Hourly Weather</Text>
				<WeatherHourlyBlock/>
				<Text style={{fontSize: 24}}>Daily Weather</Text>
				<WeatherDailyBlock/>
			</View>
		</View>
	)
}

export default Content