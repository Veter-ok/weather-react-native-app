import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'

interface IPropsCloud {
	left: number,
	top: number,
}

const Cloud:FC<IPropsCloud> = ({left, top}) => {
	return (
		<View style={StyleSheet.compose(style.cloud, {left: left, top: top})}>
			<View style={StyleSheet.compose(style.cloudCircle, style.cloudCircle1)}></View>
			<View style={StyleSheet.compose(style.cloudCircle, style.cloudCircle2)}></View>
			<View style={StyleSheet.compose(style.cloudCircle, style.cloudCircle3)}></View>
			<View style={StyleSheet.compose(style.cloudCircle, style.cloudCircle4)}></View>
			<View style={StyleSheet.compose(style.cloudCircle, style.cloudCircle5)}></View>
		</View>
	)
}

const style = StyleSheet.create({
	cloud: {
		position: "absolute",
		width: 85,
		height: 75,
		zIndex: 100
	},
	cloudCircle: {
		backgroundColor: "white",
		borderRadius: 50,
		position: "relative",
	},
	cloudCircle1: {
		height: 30,
		width: 30,
		left: 10,
		top: 10,
	},
	cloudCircle2: {
		height: 35,
		width: 35,
	},
	cloudCircle3: {
		height: 40,
		width: 40,
		left: 20,
		bottom: 40,
	},
	cloudCircle4: {
		height: 30,
		width: 30,
		left: 38,
		bottom: 90,
	},
	cloudCircle5: {
		height: 35,
		width: 35,
		left: 50,
		bottom: 107,
	}
})

export default Cloud