import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Linking, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import Header from '../../components/Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import styles from './styles'
import api from '../../services/web'
import * as Domain from '../../store/actions/domains'
import * as History from '../../store/actions/history'
import _ from 'lodash'
import { connect } from 'react-redux'

var moment = require('moment');

function Search({ navigation, domains, dispatch }) {
    const [inputText, setInputText] = useState('')
    const [resultWhois, setResultWhois] = useState('')
    const [optionVisible, setOptionVisible] = useState(false)
    const [loading, setLoading] = useState(null)
    const [domainAvailable, setDomainAvailable] = useState(null)
    const [domainFavorite, setDomainFavorite] = useState(false)

    function changeInput(inputText) {
        setOptionVisible(false)
        setInputText(inputText)
    }

    function favoriteVerify() {
        var domainCurrent = domains.filter(item => {
            return item.name == inputText
        })
        console.log(JSON.stringify(domainCurrent))
        if (domainCurrent[0] !== undefined) {
            return domainCurrent[0].isFavorite
        }
        return false

    }

    function teste() {
        console.log(domains)
        if (domainFavorite) {
            setDomainFavorite(false)
            dispatch(Domain.favorite(inputText, false))
        } else {
            setDomainFavorite(true)
            dispatch(Domain.favorite(inputText, true))
        }
        var favorite = () => favoriteVerify()
        setDomainFavorite(favorite)

    }

    async function search() {
        if (inputText != '') {
            setLoading(true)
            api(inputText).then(data => {
                setResultWhois(data.data.rawdata)
                setOptionVisible(true)
                if (data.data.rawdata.toString().search('NOT FOUND') != -1 || data.data.rawdata.toString().search('No match') != -1) {
                    setDomainAvailable(true)
                } else {
                    setDomainAvailable(false)
                }
                dispatch(Domain.addDomain(inputText))
                var random = Math.floor(Math.random() * 10000) + 1
                dispatch(History.saveHistory(random, inputText, moment().format().toString()))
                var favorite = () => favoriteVerify()
                setDomainFavorite(favorite)
                setLoading(false)

            }).catch((error) => {
                console.log(error)
                setLoading(null)
                showMessage({
                    message: "Connection error!",
                    description: "Sorry, try again later.",
                    type: "danger",
                });

            })
        }

    }

    return (
        <View style={styles.background}>
            <View style={styles.containerTop}>
                <View style={{flexDirection:'row', backgroundColor: '#550bb0', paddingTop: 22 }}>
                    <TouchableNativeFeedback
                        onPress={x => navigation.openDrawer(x)}>
                        <View style={{
                            paddingHorizontal: 20,
                            paddingVertical: 15
                        }}>
                            <AntDesign
                                name={'menu-fold'}
                                size={21}
                                color="#fff">
                            </AntDesign>
                        </View>
                    </TouchableNativeFeedback>
                    <Text style={{color:'#fff', fontSize:15, paddingHorizontal:10, paddingVertical:15}}>Whois & Domain Verify</Text>
                </View>
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
                                autoFocus={true}
                                autoCapitalize='none'

                            ></TextInput>
                            <Button buttonStyle={styles.searchButton}
                                onPress={search}
                                icon={<MaterialIcons
                                    name={'search'}
                                    size={25}
                                    color='#fff'
                                ></MaterialIcons>}>
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
                                    onPress={() => teste()}
                                    icon={
                                        domainFavorite === true
                                            ? <MaterialIcons
                                                name={'star'}
                                                size={22}
                                                color='yellow'
                                                style={styles.buttonOptionIcon}
                                            ></MaterialIcons>
                                            : <MaterialIcons
                                                name={'star-border'}
                                                size={22}
                                                color='#fff'
                                                style={styles.buttonOptionIcon}
                                            ></MaterialIcons>
                                    }>
                                </Button>
                                <Button
                                    buttonStyle={styles.buttonWeb}
                                    title={'Open in Browser'}
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
                            <Text style={styles.nullText}>Search for a domain!</Text>
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
            <FlashMessage position="bottom" icon="danger" />
        </View>
    )
}

export default connect(state => ({ domains: state.domains, history: state.history }))(Search)