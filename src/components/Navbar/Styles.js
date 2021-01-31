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
        display: 'flex',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 35,
        padding: 20
    },

    title: {
        fontFamily: defaultFont('Bold'),
        fontSize: 20
    },

    userPicture: {
        alignSelf: 'flex-start',
        borderRadius: 50,
        width: height_logo - 110,
        height: height_logo - 110
    },

    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    menuItem: {
        marginHorizontal: 16
    },
    badgeStyle: {
        backgroundColor: 'orange',
        fontFamily: defaultFont('Bold'),
        position: 'absolute',
        margin: 8,
        bottom: 1,
        flex: 1
    }
});

export default Styles;