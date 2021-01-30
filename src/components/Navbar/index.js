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

// Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Navbar = (props) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <TouchableOpacity>
                <Text style={Styles.title}>{props.sectionTitle}</Text>
            </TouchableOpacity>

            {/* Inicio - Menu */}
            <View style={Styles.menuContainer}>
                <TouchableOpacity style={Styles.menuItem}>
                    <FontAwesome
                        name="bell-o"
                        color="#333"
                        size={20}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Styles.menuItem, { marginRight: 0 }]}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../../assets/navbar/img/perfil.jpeg')}
                        style={Styles.userPicture}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
            {/* Fim - Menu */}
        </View>
    );
}

export default Navbar;