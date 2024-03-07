import React, {FunctionComponent as FC} from 'react'
import Cloud from '../drawing/cloud'
import { View } from 'react-native'

const Clouds:FC = () => {
	return (
		<View>
			<Cloud left={15} top={200}/>
			<Cloud left={200} top={220}/>
			<Cloud left={290} top={125}/>
			<Cloud left={500} top={180}/>
			<Cloud left={675} top={225}/>
			<Cloud left={880} top={140}/>
		</View>
	)
}

export default Clouds