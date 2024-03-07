import {FunctionComponent as FC, useContext} from 'react'
import { colors_1, colors_2 } from './colors'
import { StyleSheet, View } from 'react-native'

interface HillProps {
	type: string
}

const Hill:FC<HillProps> = ({type}) => {

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
		width: "75%",
		height: 700,
		borderRadius: 999,
		position: "absolute",
		backgroundColor: "rgb(70, 207, 134)"
	},
	hill_1: {
		top: 380,
		left: "-20%", // -70
		zIndex: 10,
	},
	hill_2: {
		top: 350,
		left: "20%", // 80
		zIndex: 10,
	},
	hill_3: {
		top: 380,
		left: "60%", // 200
		zIndex: 10,
	},
	hill_4: {
		top: 400,
		left: "-20%", // -70
		zIndex: 10,
	},
	hill_5: {
		top: 400,
		left: "60%", // 90
		zIndex: 10,
	},
	hill_6: {
		top: 375,
		left: "21%", // 90
		zIndex: 10,
	},
})

export default Hill