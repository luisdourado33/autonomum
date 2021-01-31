import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Touchable
} from 'react-native';

// Styles
import Styles from './Styles';

import * as Animatable from 'react-native-animatable';

// React Native Paper
import { Badge } from 'react-native-paper';

// Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import { defaultFont } from '../../assets/default';

const Navbar = (props) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
            >
                <FontAwesome name="bars" size={25} color="#333" />
            </TouchableOpacity>

            {/* Inicio - Menu */}
            <View style={Styles.menuContainer}>
                <TouchableOpacity
                    style={[Styles.menuItem, { marginRight: 0 }]}
                    onPress={() => navigation.toggleDrawer()}
                >
                    {/* <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../../assets/navbar/img/perfil.jpeg')}
                        style={Styles.userPicture}
                        resizeMode="cover"
                    /> */}
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="bell-o" size={20} />
                        <Badge
                            size={20}
                            style={Styles.badgeStyle}
                        >{props.notification}</Badge>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Fim - Menu */}
        </View>
    );
}

export default Navbar;