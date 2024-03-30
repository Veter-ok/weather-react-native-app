import React, {FunctionComponent as FC, useRef, useEffect} from 'react'
import {Animated, StyleSheet, View } from 'react-native'

interface MiddleSunProps {
	timeOfDay: "morning" | "evening",
}

const MiddleSun:FC<MiddleSunProps> = ({timeOfDay}) => {
	const riseAnim = useRef(new Animated.Value(0)).current;

	const backgroundColor = {
		"evening": "rgb(248, 204, 168)",
		"morning": "rgb(248, 236, 168)"
	}
	const shadowColor = {
		"evening": "rgb(245, 140, 102)",
		"morning": "rgb(248, 236, 168)"
	}

	useEffect(() => {
		Animated.timing(riseAnim, {
		  toValue: 1,
		  duration: 1800,
		  useNativeDriver: true,
		}).start();
	  }, [riseAnim]);

	return (
		<Animated.View style={StyleSheet.compose(style.sun, {
			backgroundColor: backgroundColor[timeOfDay],
			shadowColor: shadowColor[timeOfDay],
			transform: [{
				translateY: riseAnim.interpolate({
				  inputRange: [0, 1],
				  outputRange: [200, 0]
				}),
			}],
		})}></Animated.View >
	)
}

const style = StyleSheet.create({
	sun: {
		width: 140,
		height: 140,
		position: "absolute",
		top: 335,
		left: 40,
		shadowOpacity: 0.9,
		shadowRadius: 13,
		borderRadius: 100,
		elevation: 3,
		zIndex: 0,
	}
})

export default MiddleSun