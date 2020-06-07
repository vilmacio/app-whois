/*
import { AsyncStorage } from 'react-native'
import { takeLatest, put, all, call } from 'redux-saga/effects'


function getHistory() {
    return AsyncStorage.getItem('@Whois:history')
}

function setHistory(newHistoryItem) {
    return AsyncStorage.setItem('@Whois:history', newHistoryItem)
}

function* asyncSaveHistory(action) {
    var RandomNumber = Math.floor(Math.random() * 10000) + 1
    const historyItemToBeSaved = {
        hisId: RandomNumber,
        domain: action.payload.domain,
        moment: action.payload.moment
    }

    const getResponse = yield call(getHistory)
    let newHistoryItem = JSON.parse(getResponse);
    if (!newHistoryItem) {
        newHistoryItem = []
    }

    newHistoryItem.unshift(historyItemToBeSaved)

    yield call(setHistory, JSON.stringify(newHistoryItem))

    const newGetResponse = yield call(getHistory)

    yield put({ type: 'SAVE_HISTORY', historyItem: newGetResponse })
}

export default function* root() {
    yield all([
        takeLatest('ASYNC_SAVE_HISTORY', asyncSaveHistory)
    ]);
}
*/
