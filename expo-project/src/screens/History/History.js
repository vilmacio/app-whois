import React, { useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeable from "react-native-gesture-handler/Swipeable";


export default function History({ navigation }) {

    _onSwipeFromRight = () => {
        alert('from right');
    };
    _onSwipeFromLeft = () => {
        alert('from Left');
    };

    return (
        <SafeAreaView>
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
            <FlatList
                data={[1, 2, 3, 4]}
                style={styles.historyList}
                keyExtractor={incident => String(incident)}
                renderItem={() => (<Text style={{color:'#000'}}>EAE FDP</Text>)}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    historyList:{
        
    }

})