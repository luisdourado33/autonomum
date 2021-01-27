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

// Fast-Messages
import * as Message from '../../assets/messages/SplashScreenMsg';

const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const viewTexture = require('../../assets/orange-texture.jpg');
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <ImageBackground
            source={viewTexture}
            style={Styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={Styles.header}>
                {/* <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../assets/logo.png')}
                    style={Styles.logo}
                    resizeMode="stretch"
                /> */}

                <View style={Styles.logoAndTextView}>
                    <Text style={Styles.logoText}>Autonomum!</Text>
                    <Text style={Styles.appDescriptionText}>
                        {Message.autonomumSlogan}
                    </Text>

                    <CardSlide />
                </View>
            </View>
            <Animatable.View
                style={[Styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[Styles.title, {
                    color: colors.text
                }]}>Junte-se a nossa comunidade!</Text>
                <View style={Styles.aboutUsView}>
                    <Text style={Styles.text}>
                        {Message.aboutUs}
                    </Text>
                </View>
                <View style={Styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['orange', 'orange']}
                            style={Styles.signIn}
                        >
                            <Text style={Styles.buttonText}>Acessar</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ImageBackground>
    );
};

export default SplashScreen;