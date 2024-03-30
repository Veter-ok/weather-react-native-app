import React, {FunctionComponent as FC, useEffect, useRef} from 'react'
import {Animated, StyleSheet, View } from 'react-native'

const Sun:FC = () => {
	const riseAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(riseAnim, {
		  toValue: 1,
		  duration: 1800,
		  useNativeDriver: true,
		}).start();
	  }, [riseAnim]);

	return (
	<Animated.View style={StyleSheet.compose(style.sun, {
		transform: [{
			translateY: riseAnim.interpolate({
			  inputRange: [0, 1],
			  outputRange: [300, 0]
			}),
		}],
	})}></Animated.View>
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
		shadowOpacity: 1,
		shadowRadius: 10,
		borderRadius: 50,
		elevation: 8,
		zIndex: 0,
	}
})

export default Sun