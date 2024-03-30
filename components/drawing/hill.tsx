import {FunctionComponent as FC, useContext} from 'react'
import { HillsColors1, HillsColors2 } from '../../styles/colors'
import { StyleSheet, View } from 'react-native'

interface HillProps {
	type: string
}

const Hill:FC<HillProps> = ({type}) => {

	return (
		<View>
			<View style={StyleSheet.compose([style.hill, style.hill_1], {backgroundColor: HillsColors1[type]})}></View>
			<View style={StyleSheet.compose([style.hill, style.hill_2], {backgroundColor: HillsColors1[type]})}></View>
			<View style={StyleSheet.compose([style.hill, style.hill_3], {backgroundColor: HillsColors1[type]})}></View>
			<View style={StyleSheet.compose([style.hill, style.hill_4], {backgroundColor: HillsColors2[type]})}></View>
			<View style={StyleSheet.compose([style.hill, style.hill_5], {backgroundColor: HillsColors2[type]})}></View>
			<View style={StyleSheet.compose([style.hill, style.hill_6], {backgroundColor: HillsColors2[type]})}></View>
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
		top: 330,
		left: "-20%", // -70
		zIndex: 10,
	},
	hill_2: {
		top: 320,
		left: "20%", // 80
		zIndex: 10,
	},
	hill_3: {
		top: 330,
		left: "60%", // 200
		zIndex: 10,
	},
	hill_4: {
		top: 350,
		left: "-20%", // -70
		zIndex: 10,
	},
	hill_5: {
		top: 350,
		left: "60%", // 90
		zIndex: 10,
	},
	hill_6: {
		top: 335,
		left: "21%", // 90
		zIndex: 10,
	},
})

export default Hill