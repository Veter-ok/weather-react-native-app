import {FunctionComponent as FC} from 'react'
import Sun from '../drawing/sun'
import Moon from '../drawing/moon'
import MorningSun from '../drawing/MorningSun'
import EveningSun from '../drawing/EveningSun'

interface IPropsLuminary {
	timeOfDay: string
	cloudcover: number
}

const Luminary:FC<IPropsLuminary> = ({timeOfDay, cloudcover}) => {
	const chooseLuminary = () => {
		if (cloudcover < 90){
			if (timeOfDay === "day"){
				return <Sun/>
			}else if (timeOfDay === "night"){
				return <Moon/>
			}else if (timeOfDay === "morning"){
				return <MorningSun/>
			}else{
				return <EveningSun/>
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