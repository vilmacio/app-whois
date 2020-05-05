import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking, ActivityIndicator, Image } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Header from '../../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Haptic from "react-native-haptic-feedback";

import styles from './styles'
import web from '../../services/web'

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
        <View style={styles.background}>
            <View style={styles.containerTop}>
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
                    centerComponent={{ text: 'Whois & Domain Verify', style: styles.headerTitle }}
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

                            ? <View style={styles.invisibleView}></View>

                            : <View style={styles.optionsView}>
                                <Button
                                    buttonStyle={styles.buttonOption}
                                    title={'Favorite'}
                                    titleStyle={styles.buttonOptionTitle}
                                    style={{ display: "none" }}
                                    icon={<MaterialIcons
                                        name={'star-border'}
                                        size={22}
                                        color='#fff'
                                        style={styles.buttonOptionIcon}
                                    ></MaterialIcons>}>
                                    ></Button>
                                <Button
                                    buttonStyle={styles.buttonOption}
                                    title={'View in Web'}
                                    titleStyle={styles.buttonOptionTitle}
                                    onPress={() => {
                                        Linking.openURL('http://' + inputText).catch(err => console.error("Couldn't load page", err))
                                    }}
                                    icon={<MaterialCommunityIcons
                                        name={'web'}
                                        size={22}
                                        color='#fff'
                                        style={styles.buttonOptionIcon}
                                    ></MaterialCommunityIcons>}
                                ></Button>
                            </View>
                        }

                    </View>
                </ScrollView>
            </View>
            <View style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading == null
                        ? <View style={styles.nullView}>
                            <MaterialCommunityIcons
                                name={'search-web'}
                                size={65}
                                color='gray'
                            ></MaterialCommunityIcons>
                            <Text style={styles.nullText}>Do a Search!</Text>
                        </View>

                        : !loading
                            ? <View style={styles.result}>
                                <View style={styles.subContainerResult}>
                                    <Text style={styles.resultTitle}>Availability</Text>
                                    <Divider style={styles.resultDivider} />
                                    {domainAvailable
                                        ? <Text style={styles.resultText}>Domain is available for registration!</Text>
                                        : <Text style={styles.resultText}>Domain is not available for registration :(</Text>
                                    }
                                </View>
                                <View style={styles.subContainerResult}>
                                    <Text style={styles.resultTitle}>Whois Result</Text>
                                    <Divider style={styles.resultDivider} />
                                    <Text style={styles.resultText}>{resultWhois.toString()}</Text>
                                </View>
                            </View>

                            : <View style={styles.activityView}>
                                <ActivityIndicator size="large" color="#550bb0" />
                            </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}
