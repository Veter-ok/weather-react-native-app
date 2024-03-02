import React, {FunctionComponent as FC, useRef, useEffect} from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

interface IPropsRainfall {
	rain: number
	weather: string
}


const Rainfall:FC<IPropsRainfall> = ({rain, weather}) => {
	const animArray = [useRef(new Animated.Value(0)).current]

	const anim = () => {
		for(let i = 0; i < 15; i++){
			animArray.push(useRef(new Animated.Value(0)).current)
		}
	}

	anim()

	const startAnimation = (n: number) => {
		for(let i = 0; i <= n; i++){
			Animated.loop(
				Animated.timing(animArray[i], {
					toValue: 1,
					duration: Math.random() * (3000 - 2000) + 2000,
					useNativeDriver: true,
				  }),
				  {iterations: 100},
			).start()
		}
	}

	const stopAnimtion = () => {
		for(let i = 0; i < animArray.length; i++){
			animArray[i].stopAnimation()
		}
	}

	const createRain = () => {
		let rainList = []
		var count = 0
		if (weather.includes("light") || weather.includes("heavy")){
			count = 8
			startAnimation(count)
		}else if (weather.includes("moderate")){
			count = 15
			startAnimation(count)
		}
		for(let i = 0; i < count; i++){
			rainList.push(<Animated.View key={i} style={StyleSheet.compose(style.drop, {
				left: Math.random() * (380 - 10) + 10,
				transform: [
					{translateY:animArray[i].interpolate({
						inputRange:[0,1],
						outputRange:[0, 800]
					})},
					{rotate:animArray[i].interpolate({
						inputRange:[0, 1],
						outputRange:["0deg", "10deg"]
					})}
				]
			})}></Animated.View>)
		}
		if (count == 0){
			stopAnimtion()
		}
		return rainList
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
		top: -200,
		borderRadius: 50,
	}
})

export default Rainfall