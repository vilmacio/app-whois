import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

function Header(navigation) {
  return (
    <View style={{ backgroundColor: '#550bb0', height: 100, marginBottom: 1, paddingTop: 22 }}>
      <Text style={{ color: '#fff', fontSize: 12 }}>Eae deu certo</Text>
      <TouchableNativeFeedback
        onPress={x => navigation.openDrawer(x)}>
        <View style={{
          paddingHorizontal: 10,
          paddingVertical: 10
        }}>
          <AntDesign
            name={'menu-fold'}
            size={21}
            color="#fff">
          </AntDesign>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Header