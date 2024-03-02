import React, {FunctionComponent as FC} from 'react'
import Cloud from '../drawing/cloud'
import { View } from 'react-native'

const Clouds:FC = () => {
	return (
		<View>
			<Cloud left={15} top={208}/>
			<Cloud left={200} top={220}/>
			<Cloud left={290} top={125}/>
		</View>
	)
}

export default Clouds