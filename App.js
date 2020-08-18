import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'

import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent barStyle='light-content' backgroundColor='#550bb0'/>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}