import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
// import Drawer from './Drawer'
import Tab from './Tab'
// import Stack from './Stack'
export default props => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Stack /> */}
                <Tab />
                    {/* <Drawer /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}