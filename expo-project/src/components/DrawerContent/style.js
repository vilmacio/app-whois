import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        
    },
    headerContainer: {
        width:'100%',
        height: 180,
        backgroundColor:'#550bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer: {
        width:65,
        height:65,
        marginVertical:10
    },
    image:{
        maxWidth:'100%',
        maxHeight:'100%',

    },
    headerText: {
        color: '#fff8f8',
        fontSize:25,
        fontWeight:'bold'
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        paddingVertical:10,
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },

    activeBackgroundColor: {
        backgroundColor: '#dedede'
    }
})

