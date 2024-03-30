import React, {FunctionComponent as FC, useState} from "react";
import { CityType } from "../../types/CityTypes";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native";
import CustomStatusBar from "../UI/statusBar";
import { SearchCity } from "../UI/SearchCity";
import PictureScreen from "../screens/PictureScreen";
import MainContent from "./MainContent";

interface IPropsContent {
	city: CityType
    setCity: any
}

export const Content:FC<IPropsContent> = ({city, setCity}) => {
    const [stutsBarWhite, setStatusBarWhite] = useState(false)

    const test = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (event.nativeEvent.contentOffset.y > 250){
            setStatusBarWhite(true)
        }else{
            setStatusBarWhite(false)
        }
    }

	return (
        <View>
            <CustomStatusBar backgroundColor={stutsBarWhite}/>
            <ScrollView scrollEventThrottle={16} onScroll={(event) => test(event)} showsVerticalScrollIndicator={false}>
                <SearchCity setCity={setCity}/>
                <PictureScreen/>
                <MainContent city={city}/>
            </ScrollView>
        </View>
	)
}

export default Content