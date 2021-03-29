import React, { Component } from 'react'; 
import { SafeAreaView } from 'react-native';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <TelaA />
                <TelaB />
                <TelaC />
            </SafeAreaView>
        )
    }
}