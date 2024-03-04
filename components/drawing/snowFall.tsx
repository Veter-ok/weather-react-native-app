import React, {FunctionComponent as FC, useRef, useEffect, useState} from 'react'
import { Animated, StyleSheet, View } from 'react-native'

interface IPropsSnow {
	weather: string
}

const SnowFall:FC<IPropsSnow> = ({weather}) => {
	const animArray:Animated.Value[] = []

	const animInit = () => {
		for(let i = 0; i < 15; i++){
			animArray.push(useRef(new Animated.Value(0)).current)
		}
	}

	animInit()

	const startAnimation = (n: number) => {
		for(let i = 0; i <  Math.min(n, animArray.length); i++){
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
			animArray[i].resetAnimation()
			animArray[i].stopAnimation()
		}
	}

	const createSnow = () => {
		let rainList:React.JSX.Element[] = []
		let count = 0
		if (weather.includes("light")){
			count = 8
		}else if (weather.includes("moderate") || weather.includes("heavy")){
			count = 15
		}
		startAnimation(count)
		for(let i = 0; i < Math.min(count, animArray.length); i++){
			rainList.push(<Animated.View key={i} style={StyleSheet.compose(style.snow, {
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
		<View>{createSnow()}</View>
	)
}

const style = StyleSheet.create({
	snow: {
		position: "absolute",
		backgroundColor: "white",
		height: 8,
		width: 8,
		top: -250,
		borderRadius: 50,
	},
})

export default SnowFall