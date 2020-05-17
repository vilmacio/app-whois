import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableNativeFeedback, AsyncStorage, Alert} from 'react-native'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as Domain from '../../store/actions/domains'
import * as HistoryActions from '../../store/actions/history'
import styles from './styles'
import { connect } from 'react-redux'
var moment = require('moment');

function History({ navigation, domains, history, dispatch }) {
    const [historyList, setHistoryList] = useState(domains)

    function sheet(hisItem){
        Alert.alert(
            `Delete ${hisItem.name}`,
            "Do you want to delete this history item?",
            [
                {
                    text: "CANCEL",
                    style: "cancel"
                    },
              {
                text: "YES",
                onPress: () => {
                    dispatch(HistoryActions.removeHistoryItem(hisItem.id))
                }}
                ]
          );
    }
    

    async function reload(){
        let his = JSON.parse(await AsyncStorage.getItem('@Whois:history'))
        
        setHistoryList(JSON.parse(await AsyncStorage.getItem('@Whois:history')))
        
    }

    async function cleanHistory(){
        Alert.alert(
            "Delete All",
            "Do you want to delete all history?",
            [
                {
                    text: "CANCEL",
                    style: "cancel"
                    },
              {
                text: "YES",
                onPress: () => {
                    dispatch(HistoryActions.resetHistory('a'))
                }}
                ]
          );
        
        
    }
    

    useEffect(() => {
        reload()
    reload()}, []);
    
    return (
        <View styles={styles.background}>
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
            <FlatList
                data={history}
                contentContainerStyle={styles.historyList}
                keyExtractor={historyItem => String(historyItem.id)}
                renderItem={({item:historyItem}) => (
                    <TouchableNativeFeedback
                        onLongPress={() => sheet(historyItem)}
                    >   
                        <View style={styles.historyItem}>
                            <Text style={styles.itemTitle}>{historyItem.domain}</Text>
                            <Text style={styles.time}>{moment(historyItem.moment).fromNow()}</Text>
                            
                        </View>
                        
                    </TouchableNativeFeedback>
                    )}
                />

        </View>
    )
}

export default connect(state => ({domains:state.domains, history:state.history}))(History)