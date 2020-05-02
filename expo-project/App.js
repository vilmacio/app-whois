import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <>
    <StatusBar translucent barStyle='light-content' backgroundColor='#550bb0'/>
    <Routes></Routes>
    </>
  );
}
