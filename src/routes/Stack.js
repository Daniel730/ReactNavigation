import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaC from '../views/TelaC'
import TelaB from '../views/TelaB'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
)