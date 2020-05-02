import React from 'react'
import { StyleSheet, View, Text, ScrollView, RefreshControl, TextInput, TouchableOpacity } from 'react-native'
import { Header, Button } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign';

export default function Search({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                placement="left"
                backgroundColor="#550bb0"
                style={{
                    elevation: 4
                }}
                leftComponent={<AntDesign
                    name={'menu-fold'}
                    size={21}
                    color="#fff"
                    style={{ paddingHorizontal: 8, paddingVertical: 4 }}
                    onPress={x => navigation.openDrawer(x)}>
                </AntDesign>}
                centerComponent={{ text: 'Whois & Domain Verify', style: { color: '#fff', fontSize: 16 } }}
                rightComponent={{}}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <View style={styles.main}>
                    <View style={styles.searchView}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder={'Domain name'}
                            autoCorrect={false}
                            autoCapitalize='none'

                        ></TextInput>
                        <Button buttonStyle={styles.searchButton}
                            icon={<Foundation
                                name={'magnifying-glass'}
                                size={22}
                                color='#fff'
                            ></Foundation>}>
                        </Button>
                    </View>
                    <View style={styles.optionsView}>
                        <Button
                            buttonStyle={styles.buttonOption}
                            title={'Favorite'}
                            titleStyle={{color:'#550bb0', fontSize:11}}
                            icon={<MaterialIcons
                                name={'star-border'}
                                size={22}
                                color='#550bb0'
                                style={{marginRight:8}}
                            ></MaterialIcons>}>
                        ></Button>
                        <Button
                            buttonStyle={styles.buttonOption}
                            title={'View in Web'}
                            titleStyle={{color:'#550bb0', fontSize:11}}
                            icon={<MaterialCommunityIcons
                                name={'web'}
                                size={22}
                                color='#550bb0'
                                style={{marginRight:8}}
                            ></MaterialCommunityIcons>}
                        ></Button>
                    </View>
                    <View style={styles.result}>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',

    },
    searchView: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
    },
    searchInput: {
        fontSize: 18,
        width: '80%',
        height: 53,
        borderRadius: 25,
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginRight: 5,
        borderWidth: 1.2,
        borderColor: '#550bb0',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 5
        },
        elevation: 1,
    },
    searchButton: {
        backgroundColor: '#550bb0',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 5,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 5
        },
        elevation: 5,
    },
    optionsView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonOption: {
        width: 110,
        height: 25,
        marginHorizontal:10,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderWidth:1,
        borderColor:'#550bb0',
        borderRadius: 15
    },
    result:{}
}
)