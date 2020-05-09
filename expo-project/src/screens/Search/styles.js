import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1
    },
    containerTop:{
      height:200  
    },
    drawerIcon:{
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    headerTitle:{
        color: '#fff',
        fontSize: 16
    },
    top: {
        backgroundColor: '#550bb0',
        width: '100%',
        paddingBottom: 10,
        marginBottom: 20,
        shadowColor: '#000',
        elevation: 6

    },
    searchView: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
    },
    searchInput: {
        fontSize: 18,
        color: '#fff',
        width: '80%',
        height: 50,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 5,
        borderWidth: 1.2,
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 5
        },
        elevation: 1,
    },
    searchButton: {
        backgroundColor: '#550bb0',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#fff',
        borderRadius: 25,
        marginLeft: 5,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 5
        },
        elevation: 5,
    },
    invisibleView:{
        height: 25,
        backgroundColor: '#550bb0'
    },
    optionsView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonOption: {
        width: 90,
        height: 25,
        marginHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderRadius: 5
    },
    buttonOptionTitle:{
        color: '#fff',
        fontSize: 11 
    },
    buttonOptionIcon:{
        marginRight: 8
    },
    result: {
        marginHorizontal: 15,
    },
    nullView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    nullText:{
        fontSize: 20,
        color: 'gray'
    },
    subContainerResult:{
        marginBottom: 20
    },
    resultTitle:{
        color: '#303030'
    },
    resultDivider:{
        backgroundColor: 'gray',
        height: 1.1
    },
    resultText:{
        color: '#707070'
    },
    activityView:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 20 
    }
}
)