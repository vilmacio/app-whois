import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableNativeFeedback, AsyncStorage, Alert} from 'react-native'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as Domain from '../../store/actions/domains'
import { connect } from 'react-redux'
import styles from './styles'

function Favorites({ navigation, domains, dispatch }) {
    const [favorites, setFavorites] = useState(reload)

    function reload(){
        var list = domains.filter(item => {
            return item.isFavorite === true
        })
        return list
    }

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
                onPress: () => {
                    try{
                        dispatch(Domain.favorite(favItem.name, false))
                    }
                    catch(error){
                        console.log(error)
                    }
                    setFavorites(reload)
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
                <View style={{flexDirection:'row', justifyContent:'space-between', width:45}}>
                <AntDesign
                    name={'reload1'}
                    size={21}
                    color="#fff"
                    style={styles.drawerIcon}
                    onPress={() => setFavorites(reload)}>
                </AntDesign>
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