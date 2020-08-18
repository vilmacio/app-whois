import { createStore, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
//import createSagaMiddleware from 'redux-saga'
//import rootSaga from './sagas'
import rootReducer from "./reducers";

//const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer //applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store)

//sagaMiddleware.run(rootSaga)

export { store, persistor }