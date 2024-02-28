import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'

interface MiddleSunProps {
	timeOfDay: "morning" | "evening",
}

const MiddleSun:FC<MiddleSunProps> = ({timeOfDay}) => {
	const backgroundColor = {
		"evening": "rgb(248, 204, 168)",
		"morning": "rgb(248, 236, 168)"
	}
	const shadowColor = {
		"evening": "rgb(245, 140, 102)",
		"morning": "rgb(248, 236, 168)"
	}

	return (
		<View style={StyleSheet.compose(style.sun, {
			backgroundColor: backgroundColor[timeOfDay],
			shadowColor: shadowColor[timeOfDay],
		})}></View>
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
		zIndex: 0,
		// animation-name: sun-rising,
		// animation-duration: 2s,
		// animation-fill-mode: forwards,
	}
})

export default MiddleSun