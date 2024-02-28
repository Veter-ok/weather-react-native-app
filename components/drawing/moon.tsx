import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'

const Moon:FC = () => {
  return (
	<View style={style.moon}>
		<View style={StyleSheet.compose(style.spot, style.spot1)}></View>
		<View style={StyleSheet.compose(style.spot, style.spot2)}></View>
		<View style={StyleSheet.compose(style.spot, style.spot3)}></View>
		<View style={StyleSheet.compose(style.spot, style.spot4)}></View>
		<View style={StyleSheet.compose(style.spot, style.spot5)}></View>
	</View>
  )
}

const style = StyleSheet.create({
	moon: {
		width: 70,
		height: 70,
		position: "absolute",
		top: 180,
		left: 40,
		backgroundColor: "rgb(245, 237, 194)",
		borderRadius: 100,
		shadowColor: 'rgb(245, 237, 194)',
		shadowOpacity: 0.5,
		shadowRadius: 7,
		zIndex: 5,
		// animation-name: moon-risig,
		// animation-duration: 2s,
		// animation-fill-mode: forwards,
	},
	spot: {
		borderRadius: 100,
		backgroundColor: "rgb(235, 225, 174)"
	}, 
	spot1: {
		height: 13,
		width: 13,
		top: 17,
		left: 20,
	},
	spot2: {
		height: 5,
		width: 5,
		top: 30,
		left: 15,
	},
	spot3: {
		height: 8,
		width: 8,
		top: 37,
		left: 25,
	},
	spot4: {
		height: 5,
		width: 5,
		top: 20,
		left: 50,
	},
	spot5: {
		height: 7,
		width: 7,
		top: -5,
		left: 45,
	}
})

export default Moon