import {FunctionComponent as FC, useContext} from 'react'
import { colors_1, colors_2 } from './colors'
import { StyleSheet, View } from 'react-native'

interface HillProps {
	type: string
}

const Hill:FC<HillProps> = ({type}) => {
	// const type = `${pictureTheme.season}-${pictureTheme.timeOfDay}-${pictureTheme.cloudCover}`
	return (
		<View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_1), {backgroundColor: colors_1[type]})}></View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_2), {backgroundColor: colors_1[type]})}></View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_3), {backgroundColor: colors_1[type]})}></View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_4), {backgroundColor: colors_2[type]})}></View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_5), {backgroundColor: colors_2[type]})}></View>
			<View style={StyleSheet.compose(StyleSheet.compose(style.hill, style.hill_6), {backgroundColor: colors_2[type]})}></View>
		</View>
	)
}

const style = StyleSheet.create({
	hill: {
		width: 270,
		height: 300,
		borderRadius: 999,
		position: "absolute",
		backgroundColor: "rgb(70, 207, 134)"
	},
	hill_1: {
		top: 380,
		left: -70,
		zIndex: 10,
	},
	hill_2: {
		top: 350,
		left: 80,
		zIndex: 10,
	},
	hill_3: {
		top: 380,
		left: 200,
		zIndex: 10,
	},
	hill_4: {
		top: 400,
		left: -70,
		zIndex: 10,
	},
	hill_5: {
		top: 380,
		left: 90,
		zIndex: 10,
	},
	hill_6: {
		top: 420,
		left: 200,
		zIndex: 10,
	},
})

export default Hill