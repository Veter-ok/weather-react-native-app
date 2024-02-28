import {FunctionComponent as FC} from 'react'
import Sun from '../drawing/sun'
import Moon from '../drawing/moon'
import MiddleSun from '../drawing/middleSun'

interface IPropsLuminary {
	timeOfDay: "morning" | "day"| "evening" | "night"
	cloudcover: number
}

const Luminary:FC<IPropsLuminary> = ({timeOfDay, cloudcover}) => {
	const chooseLuminary = () => {
		if (cloudcover < 90){
			if (timeOfDay === "day"){
				return <Sun/>
			}else if (timeOfDay === "night"){
				return <Moon/>
			}else{
				return <MiddleSun timeOfDay={timeOfDay}/>
			}
		}else{
			return <></>
		}
	}

	return (
		<>
			{chooseLuminary()}
		</>
	)
}

export default Luminary