import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const INITIAL_STATE = {
    history: ''
}

async function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'SAVE_HISTORY') {
        console.log(action)
        return state
    }
    return state
}

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store