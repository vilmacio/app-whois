
import React, { useState } from 'react';
import { Text, View, Image, TouchableNativeFeedback} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export function DrawerContent({ navigation }) {
    const [activeItemKey, setActiveItemKey] = useState('Search')

    function navigateToScreen(screen){
        navigation.navigate(screen)
        setActiveItemKey(screen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/icon.png')} style={styles.image}></Image>
                </View>
                <Text style={styles.headerText}>W&D Verify</Text>
            </View>
            <View style={styles.screenContainer}>
                <TouchableNativeFeedback>
                    <View 
                    style={[styles.screenStyle, 
                        (activeItemKey=='Search') 
                        ? styles.activeBackgroundColor 
                        : null]}>
                        <MaterialIcons
                            name="search"
                            size={35}
                            color="#525252"
                        />
                        <Text 
                        style={styles.screenTextStyle} 
                            onPress={()=>{navigateToScreen('Search')}}>
                                Search
                            </Text>
                    </View>
                </TouchableNativeFeedback>
                
                <TouchableNativeFeedback>
                    <View 
                    style={[styles.screenStyle, 
                        (activeItemKey=='History') 
                        ? styles.activeBackgroundColor 
                        : null]}>
                        <MaterialIcons
                            name="history"
                            size={35}
                            color="#525252"
                        />
                        <Text 
                        style={styles.screenTextStyle} 
                            onPress={()=>{navigateToScreen('History')}}>
                                History
                            </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                    <View 
                    style={[styles.screenStyle, 
                        (activeItemKey=='Favorites') 
                        ? styles.activeBackgroundColor 
                        : null]}>
                        <MaterialIcons
                            name="star-border"
                            size={35}
                            color="#525252"
                        />
                        <Text 
                        style={styles.screenTextStyle} 
                            onPress={()=>{navigateToScreen('Favorites')}}>
                                Favorites
                            </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}
