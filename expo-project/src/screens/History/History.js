import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView, Text, TouchableNativeFeedback, AsyncStorage } from 'react-native'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from './styles'
var moment = require('moment');

export default function History({ navigation }) {
    const [history, setHistory] = useState([])

    async function reload(){
        setHistory(JSON.parse(await AsyncStorage.getItem('@Whois:history')).reverse())
    }

    async function cleanHistory(){
        await AsyncStorage.removeItem('@Whois:history')
        reload()
    }

    useEffect(() => {
        reload()
    reload()}, []);
    
    return (
        <SafeAreaView styles={styles.background}>
            <Header
                placement="left"
                backgroundColor="#550bb0"
                leftComponent={<AntDesign
                    name={'menu-fold'}
                    size={21}
                    color="#fff"
                    style={styles.drawerIcon}
                    onPress={x => navigation.openDrawer(x)}>
                </AntDesign>}
                centerComponent={{ text: 'History', style: styles.headerTitle }}
                rightComponent={
                <View style={{flexDirection:'row', justifyContent:'space-between', width:85}}>
                <AntDesign
                    name={'reload1'}
                    size={21}
                    color="#fff"
                    style={styles.drawerIcon}
                    onPress={() => reload()}>
                </AntDesign>
                <FontAwesome5
                name={'trash'}
                size={21}
                color="#fff"
                style={styles.drawerIcon}
                onPress={() => cleanHistory()}>
            </FontAwesome5>
            </View>}
            />
            <View style={styles.container}>
                <FlatList
                    data={history}
                    style={styles.historyList}
                    keyExtractor={historyItem => String(historyItem.hisId)}
                    renderItem={({item:historyItem}) => (
                        <TouchableNativeFeedback>
                            <View style={styles.historyItem}>
                                <Text style={styles.itemTitle}>{historyItem.domain}</Text>
                                <Text style={styles.time}>{moment(historyItem.moment).fromNow()}</Text>
                            </View>
                            
                        </TouchableNativeFeedback>
                    )}
                />
            </View>

        </SafeAreaView>
    )
}