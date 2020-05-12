import { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'

const INITIAL_STATE = {
    history: []
}

async function reducer(state = INITIAL_STATE, action) {
    if (action.type == 'LOAD_HISTORY') {
        console.log(state)
        return { ...state, history: action.history }
    }
    return state
}

const store = createStore(reducer);

export default store