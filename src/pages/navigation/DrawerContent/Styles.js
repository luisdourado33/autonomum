import {
    StyleSheet
} from 'react-native';

/**
 * Definições padrão
 */

import {
    defaultFont
} from '../../../assets/default';


const Styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontFamily: defaultFont('Bold'),
    },
    caption: {
        flex: 1,
        display: 'flex',
        fontSize: 10,
        fontFamily: defaultFont('Regular'),
        lineHeight: 14
    },
    drawerItem: {
        fontFamily: defaultFont('SemiBold')
    },
    logo: {
        width: 100,
        height: 40,
        margin: 20,
        alignSelf: 'flex-start',
        resizeMode: 'contain'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
        fontFamily: defaultFont('SemiBold')
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    avatarAndUserDataCont: {
        flexDirection: 'row',
        marginTop: 15
    },
    usernameAndEmail: {
        marginLeft: 15,
        flexDirection: 'column'
    }
});

export default Styles;