import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableNativeFeedback, AsyncStorage, Alert} from 'react-native'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { connect } from 'react-redux'
import styles from './styles'

function Favorites({ navigation, domains }) {
    const [favorites, setFavorites] = useState(
        domains.filter(item => {
            return item.isFavorite === false
        }))

    function sheet(favItem){
        Alert.alert(
            `Delete ${favItem.name}`,
            "Do you want to delete this favorite item?",
            [
                {
                    text: "CANCEL",
                    style: "cancel"
                    },
              {
                text: "YES",
                onPress: async() => {
                    try{
                        let favoritesJSON = await AsyncStorage.getItem('@Whois:favorites');
                        let favoritesArray = JSON.parse(favoritesJSON);
                        var alteredFavorites = favoritesArray.filter(e => {
                            return e.domain !== favItem.domain
                
                        })
                        await AsyncStorage.setItem('@Whois:favorites', JSON.stringify(alteredFavorites));
                        setFavorites(alteredFavorites)
                    }
                    catch(error){
                        console.log(error)
                    }
                    reload() 
                }}
                ]
          );
    }

    async function cleanFavorites(){
        Alert.alert(
            "Delete All",
            "Do you want to delete all favorites?",
            [
                {
                    text: "CANCEL",
                    style: "cancel"
                    },
              {
                text: "YES",
                onPress: async() => {
                    await AsyncStorage.removeItem('@Whois:favorites')
                    reload() 
                }}
                ]
          );
        
        
    }
    
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
                centerComponent={{ text: 'Favorites', style: styles.headerTitle }}
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
                    onPress={() => cleanFavorites()}>
            </FontAwesome5>
            </View>}
            />
            <FlatList
                data={favorites}
                contentContainerStyle={styles.historyList}
                keyExtractor={favoriteItem => String(favoriteItem.name)}
                renderItem={({item:favoriteItem}) => (
                    <TouchableNativeFeedback
                        onLongPress={() => sheet(favoriteItem)}
                    >
                        <View style={styles.historyItem}>
                            <Text style={styles.itemTitle}>{favoriteItem.name}</Text>
                            <Text style={styles.time}>{favoriteItem.isFavorite.toString()}</Text>
                        </View>   
                    </TouchableNativeFeedback>
                    )}
                />

        </View>
    )
}

export default connect(state => ({domains:state.domains, history:state.history}))(Favorites)