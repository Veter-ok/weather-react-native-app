import { View, StyleSheet, Text} from 'react-native';
import { CityType } from '../../types/CityTypes';
import { Input } from './Input';
import React, {FunctionComponent as FC, useState} from "react";

interface IPropsSearchCity {
	setCity: (param: CityType) => void
}

interface cityType {
	name: string
	country: string
	lat: number,
	lon: number
}

export const SearchCity:FC<IPropsSearchCity> = ({setCity}) => {
	const [currentlyCity, setCurrentlyCity] = useState('')
	const [cities, setCities] = useState<cityType[]>([{name: '', country: '', lat: 0, lon: 0}])

	const onChangeValue = async (value: string) => {
		setCurrentlyCity(value)
		if (value !== ''){
			await sendRequest(value, false)
		}else{
			setCities([{name: '', country: '', lat: 0, lon: 0}])
		}
	}

	const EnderDown = async (key: string) => {
		if (key === "Enter") {
			await sendRequest(currentlyCity, true)
			setCities([{name: '', country: '', lat: 0, lon: 0}])
			setCurrentlyCity('')
		}
	}

	const sendRequest = async (value: string, isLast:boolean) => {
		await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.EXPO_PUBLIC_REACT_APP_OW_API}`)
			.then((response) => response.json())
			.then((data) => {
				if (isLast){
					setCity({cityName: data[0].name, coordinates: {lat: data[0].lat, lon: data[0].lon}})
				}
				setCities(data)
			})
	}

	const chooseCity = (city: cityType) => {
		setCity({cityName: city.name, coordinates: {lat: city.lat, lon: city.lon}})
		setCities([{name: '', country: '', lat: 0, lon: 0}])
		setCurrentlyCity('')
	}

	return (
		<View style={{top: 40}}>
			<Input 
				value={currentlyCity} 
				onChange={onChangeValue}
				onKeyDown={EnderDown}
			/>
			{cities.length > 1 ?
				<View style={style.results}>
					{cities.map((item, index) => 
						<View key={index}>
							<Text onPress={(e) => chooseCity(item)} style={style.cityBlock}>{item.name}, {item.country}</Text>
						</View>
					)}
				</View>
				:
				<></>
			}
		</View>
	)
}

const style = StyleSheet.create({
	results: {
		position: "absolute",
		width: "50%",
		height: 180,
		top: 80,
		left: "25%",
		padding: 10,
		backgroundColor: "white",
		borderRadius: 15,
		zIndex: 10,
	},
	cityBlock: {
		height: 30,
		width: "100%",
		marginTop: 3,
		borderRadius: 10,
	}
})