import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store'

import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle='light-content' backgroundColor='#550bb0'/>
      <Routes/>
    </Provider>
  );
}
