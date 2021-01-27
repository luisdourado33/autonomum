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
    }
});

export default Styles;