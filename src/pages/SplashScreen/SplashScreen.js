import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Stylesheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

// Page Styles
import Styles from './Styles';

const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={Styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../assets/logo.png')}
                    style={Styles.logo}
                    resizeMode="stretch"
                />
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
                <Text style={Styles.text}>Entre com sua conta</Text>
                <View style={Styles.button}>
                    <View style={Styles.buttonGroup}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <LinearGradient
                                colors={['orange', 'orange']}
                                style={Styles.signIn}
                            >
                                <Text style={Styles.textSign}>Acessar</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <LinearGradient
                                colors={['orange', 'orange']}
                                style={Styles.signIn}
                            >
                                <Text style={Styles.textSign}>Sobre</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;