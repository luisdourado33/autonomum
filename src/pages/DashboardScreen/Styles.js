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
        backgroundColor: 'white'
    },
    logoAndTextView: {
        margin: 15,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: -100,
    },
    header: {
        flex: 0,
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        alignSelf: 'flex-start',
        width: height_logo - 90,
        height: height_logo - 90
    },
    userPicture: {
        alignSelf: 'flex-start',
        borderRadius: 50,
        marginRight: 15,
        width: height_logo - 110,
        height: height_logo - 110
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
        color: 'orange',
        fontFamily: defaultFont('Bold'),
        fontSize: 18,
    },
    caption: {
        bottom: 10,
        fontFamily: defaultFont('Light')
    },
    titleContainer: {
        padding: 15,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    animatableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderColor: '#eee',
        borderRadius: 2,
        elevation: 0,
        borderWidth: 1,
        margin: 15
    },
    helloUser: {
        padding: 15
    },
    helloUserTitle: {
        fontSize: 25,
        fontFamily: defaultFont('Light')
    },
    searchContainer: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        fontFamily: defaultFont('Light')
    }
});

export default Styles;