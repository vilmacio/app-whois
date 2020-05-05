import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Linking, ActivityIndicator, Image } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Header from '../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Haptic from "react-native-haptic-feedback";

import web from '../services/web'

export default function Search({ navigation }) {
    const [inputText, setInputText] = useState('')
    const [resultWhois, setResultWhois] = useState('')
    const [optionVisible, setOptionVisible] = useState(false)
    const [loading, setLoading] = useState(null)
    const [domainAvailable, setDomainAvailable] = useState(null)

    function changeInput(inputText) {
        setOptionVisible(false)
        setInputText(inputText)
    }

    async function search() {
        if (inputText != '') {
            Haptic.trigger("notificationSuccess", { enableVibrateFallback: true, ignoreAndroidSystemSettings: false });
            setLoading(true)
            web.api(inputText).then(data => {
                setResultWhois(data.data.domain)
                setOptionVisible(true)
                if (data.data.domain.toString().search('No match for') != -1) {
                    setDomainAvailable(true)
                } else {
                    setDomainAvailable(false)
                }
                setLoading(false)
            }).catch((error) => { console.log(error) })
        }

    }

    return (
        <View style={{flex:1}}>
            <View style={{height:200}}>
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
                    centerComponent={{ text: 'Whois & Domain Verify', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={{}}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.top}>
                        <View style={styles.searchView}>
                            <TextInput
                                style={styles.searchInput}
                                value={inputText}
                                onChangeText={inputText => changeInput(inputText)}
                                onSubmitEditing={search}
                                placeholder={'example.com'}
                                placeholderTextColor={'#e6e6e6'}
                                autoCorrect={false}
                                autoCapitalize='none'

                            ></TextInput>
                            <Button buttonStyle={styles.searchButton}
                                onPress={search}
                                icon={<Foundation
                                    name={'magnifying-glass'}
                                    size={22}
                                    color='#fff'
                                ></Foundation>}>
                            </Button>
                        </View>
                        {!optionVisible

                            ? <View style={{ height: 25, backgroundColor: '#550bb0' }}></View>

                            : <View style={styles.optionsView}>
                                <Button
                                    buttonStyle={styles.buttonOption}
                                    title={'Favorite'}
                                    titleStyle={{ color: '#fff', fontSize: 11 }}
                                    style={{ display: "none" }}
                                    icon={<MaterialIcons
                                        name={'star-border'}
                                        size={22}
                                        color='#fff'
                                        style={{ marginRight: 8 }}
                                    ></MaterialIcons>}>
                                    ></Button>
                                <Button
                                    buttonStyle={styles.buttonOption}
                                    title={'View in Web'}
                                    titleStyle={{ color: '#fff', fontSize: 11 }}
                                    onPress={() => {
                                        Linking.openURL('http://' + inputText).catch(err => console.error("Couldn't load page", err))
                                    }}
                                    icon={<MaterialCommunityIcons
                                        name={'web'}
                                        size={22}
                                        color='#fff'
                                        style={{ marginRight: 8 }}
                                    ></MaterialCommunityIcons>}
                                ></Button>
                            </View>
                        }

                    </View>
                </ScrollView>
            </View>
            <View style={{ flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading == null
                        ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                            <MaterialCommunityIcons
                                name={'search-web'}
                                size={65}
                                color='gray'
                                style={{ marginRight: 8 }}
                            ></MaterialCommunityIcons>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Do a Search!</Text>
                        </View>

                        : !loading
                            ? <View style={styles.result}>
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={{ color: '#303030' }}>Availability</Text>
                                    <Divider style={{ backgroundColor: 'gray', height: 1.1 }} />
                                    {domainAvailable
                                        ? <Text style={{ color: '#707070' }}>Domain is available for registration!</Text>
                                        : <Text style={{ color: '#707070' }}>Domain is not available for registration :(</Text>
                                    }
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={{ color: '#303030' }}>Whois Result</Text>
                                    <Divider style={{ backgroundColor: 'gray', height: 1.1 }} />
                                    <Text style={{ color: '#707070' }}>{resultWhois.toString()}</Text>
                                </View>
                            </View>

                            : <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                                <ActivityIndicator size="large" color="#550bb0" />
                            </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        backgroundColor: '#550bb0',
        width: '100%',
        paddingBottom: 10,
        marginBottom: 10,
        shadowColor: '#000',
        elevation: 6

    },
    searchView: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
    },
    searchInput: {
        fontSize: 18,
        color: '#fff',
        width: '80%',
        height: 50,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 5,
        borderWidth: 1.2,
        borderColor: '#FFF',
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
        borderWidth: 1.5,
        borderColor: '#fff',
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
        width: 90,
        height: 25,
        marginHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderRadius: 5
    },
    result: {
        marginHorizontal: 15,
    }
}
)