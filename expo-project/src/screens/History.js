import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Header from '../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function History({ navigation }){
    return(
        <View>
            <Header
                placement="left"
                backgroundColor="#550bb0"
                leftComponent={<AntDesign
                    name={'menu-fold'}
                    size={21}
                    color="#fff"
                    style={{ paddingHorizontal: 8, paddingVertical: 4 }}
                    onPress={x => navigation.openDrawer(x)}>
                </AntDesign>}
                centerComponent={{ text: 'History', style: { color: '#fff', fontSize: 16 } }}
                rightComponent={{}}
            />
        </View>
    )
}