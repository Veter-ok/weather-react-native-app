import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'

const Sun:FC = () => {
  return (
	<View style={style.sun}></View>
  )
}

const style = StyleSheet.create({
	sun: {
		width: 70,
		height: 70,
		position: "absolute",
		top: 180,
		left: 40,
		backgroundColor: "rgb(248, 236, 168)",
		shadowColor: 'rgb(248, 236, 168),',
		shadowOpacity: 0.8,
		shadowRadius: 11,
		borderRadius: 100,
		zIndex: 5,
		// animation-name: sun-rising,
		// animation-duration: 2s,
		// animation-fill-mode: forwards,
	}
})

export default Sun