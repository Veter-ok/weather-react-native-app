import React, {FunctionComponent as FC} from 'react'
import { StyleSheet, View } from 'react-native'


const SnowFall:FC = () => {

	const createSnow = () => {
		let snowList = []
		for(let i = 0; i < 50; i++){
			snowList.push(<View key={i} style={
				style.snow
			}></View>)
		}
		return snowList
	}

	return (
	<View>
		{createSnow()}
	</View>
	)
}

const style = StyleSheet.create({
	snow: {
		position: "absolute",
		backgroundColor: "rgb(84, 84, 250)",
		height: 8,
		width: 8,
		top: -200,
		borderRadius: 50,
	}
})

export default SnowFall