/**
 * Autonomum App
 * https://github.com/luisdourado33/Autonomum
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

// Page Styles
import Styles from './Styles';

/**
 * Definições padrão
 */

import {
    defaultFont
} from '../../assets/default';


// Components
import CardSlide from '../../components/CardSlide/CardSlide';
import Navbar from '../../components/Navbar';
import Greeting from '../../components/Greeting';

// Fast-Messages
import * as Message from '../../assets/messages/DashboardScreenMsg';

const Main = () => {
    return (
        <View
            style={Styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={Styles.header}>
                <Navbar sectionTitle="Dashboard" />
                {/* <Greeting username="Luís" /> */}
            </View>

        </View>
    );
}
const DashboardScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const viewTexture = require('../../assets/orange-texture.jpg');
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <Main />
    );
};

export default DashboardScreen;