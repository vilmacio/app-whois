import React, { useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView, Text, TouchableNativeFeedback } from 'react-native'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from './styles'
import { Divider } from 'react-native-elements';

export default function History({ navigation }) {

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
                rightComponent={{}}
            />
            <View style={styles.container}>
                <FlatList
                    data={[1, 2, 3, 4]}
                    style={styles.historyList}
                    keyExtractor={incident => String(incident)}
                    renderItem={() => (
                        <TouchableNativeFeedback>
                            <View style={styles.historyItem}>
                                <Text style={styles.itemTitle}>frixel.com.br</Text>
                            </View>
                            
                        </TouchableNativeFeedback>
                    )}
                />
            </View>

        </SafeAreaView>
    )
}