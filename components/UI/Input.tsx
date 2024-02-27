import React, {FunctionComponent as FC} from "react";
import {TextInput, StyleSheet} from 'react-native'

interface IInputProps {
	value: string,
	onChange: (a: any) => void
	onKeyDown: (a: string) => void
}

export const Input:FC<IInputProps> = ({value, onChange, onKeyDown}) => {

	return (
		<>
			<TextInput 
				style={style.input}
				value={value} 
				onChangeText={(text) => onChange(text)}
				// onKeyDown={(e) => onKeyDown(e.key)}
			/>
		</>
	)
}

const style = StyleSheet.create({
	input: {
		position: "absolute",
		top: 70,
		color: "white",
		textAlign: "center",
		fontSize: 16,
		borderWidth: 2,
		borderColor: "white",
		zIndex: 10,
		width: "60%",
		height: 35,
		borderRadius: 10,
		backgroundColor: "transparent"
	},
})