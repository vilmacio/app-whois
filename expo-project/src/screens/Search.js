import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'

export default function Search({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <Header
                placement="left"
                backgroundColor="#550bb0"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text>Search screen</Text>
        </View>
    )
}