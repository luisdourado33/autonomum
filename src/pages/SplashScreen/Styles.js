import { 
    StyleSheet,
    Dimensions
 } from 'react-native';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        alignSelf: 'center',
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 22,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 30
    },
    buttonGroup: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Styles;