import {
    StyleSheet,
    Dimensions
} from 'react-native';

/**
 * Definições padrão
 */

import {
    defaultFont
} from '../../assets/default';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    logoAndTextView: {
        margin: 15,
    },
    header: {
        flex: 2,
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
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
        alignSelf: 'flex-start',
        width: height_logo,
        height: height_logo
    },
    logoText: {
        fontFamily: defaultFont('Bold'),
        fontSize: 30,
        paddingTop: 30
    },
    appDescriptionText: {
        fontFamily: defaultFont('Light'),
        fontSize: 15,
        flex: 0,
        display: 'flex',
    },
    sloganView: {
        flex: 1,
        marginTop: 100,
        alignSelf: 'center'
    },
    sloganText: {
        fontFamily: defaultFont('SemiBold'),
        fontSize: 15,
        color: '#333',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#05375a',
        fontFamily: defaultFont('Bold'),
        fontSize: 22,
    },
    text: {
        fontFamily: defaultFont('Light'),
        color: 'grey'
    },
    button: {
        alignSelf: 'flex-end',
        marginTop: 15,
        flexDirection: 'row',
    },
    buttonText: {
        fontFamily: defaultFont('SemiBold'),
        color: '#FFF'
    },
    signIn: {
        elevation: 1,
        padding: 10,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontFamily: defaultFont('SemiBold'),
    },
    aboutUsView: {
        marginTop: 15,
        alignContent: 'stretch',
        alignContent: 'center'
    }
});

export default Styles;