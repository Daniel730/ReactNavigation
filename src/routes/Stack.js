import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaC from '../views/TelaC'
import TelaB from '../views/TelaB'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" title="TelaA">
            {
                props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA />
                    </PassoStack>
                ) 
            }
        </Stack.Screen>
        <Stack.Screen name="TelaB" title="TelaB">
            {
                props => (
                    <PassoStack {...props} avancar="TelaC" voltar>
                        <TelaB />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC" title="TelaC">
            {
                props => (
                    <PassoStack {...props} voltar>
                        <TelaC />
                    </PassoStack>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>
)