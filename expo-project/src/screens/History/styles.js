import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#fff'  
    },
    drawerIcon:{
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    headerTitle:{
        color: '#fff',
        fontSize: 16
    },
    historyList:{
        backgroundColor:'#fff'  
    },
    historyItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:'rgba(1, 1, 1, 0.15)',
        backgroundColor:'#fff',
        paddingVertical:16,
        paddingHorizontal:30,
    },
    itemTitle:{
        color:'#000',
        fontSize:16
    },
    time:{
        color:'gray'
    }

})