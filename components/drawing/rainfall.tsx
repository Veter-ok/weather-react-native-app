import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'

interface IPropsRainfall {
	rain: number
	weather: string
}


const Rainfall:FC<IPropsRainfall> = ({rain, weather}) => {

	const createRain = () => {
		let rainList = []
		var count = rain * 15
		if (weather){
			if (weather.includes("light")){
				count = 20
			}else if (weather.includes("moderate")){
				count = 35
			}
			for(let i = 0; i < count; i++){
				rainList.push(<View key={i} style={StyleSheet.compose(style.drop, {
					left: Math.random() * (0 - 1000) + 1000,
					// animationDirection: `${Math.random() * (2 - 7) + 7}s`,
					// animationDelay: `${Math.random() * (1 - 7) + 7}s`
				})}></View>)
			}
			return rainList
		}
	}

	return (
		<View>
			{createRain()}
		</View>
	)
}

const style = StyleSheet.create({
	drop: {
		position: "absolute",
		backgroundColor: "rgb(84, 84, 250)",
		height: 15,
		width: 10,
		top: -100,
		borderRadius: 50,
		// animation-name: drop,
		// animation-iteration-count: infinite,
		// animation-timing-function:linear,
		// animation-duration: 2s,
		zIndex: 10,
	}
})

export default Rainfall