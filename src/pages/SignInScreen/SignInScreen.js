import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Stylesheet,
    StatusBar,
    Alert
} from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// Page Styles
import Styles from './Styles';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    // Functions
    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor='orange' barStyle="light-content" />
            <View style={Styles.header}>
                <Text style={Styles.text_header}>Autonomum</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[Styles.footer, {
                    backgroundColor: '#eee'
                }]}
            >
                <Text style={[Styles.text_footer, {
                    color: '#333'
                }]}>E-mail</Text>
                <View style={Styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#333"
                        size={20}
                    />
                    <TextInput
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#666666"
                        style={[Styles.textInput, {
                            color: "#333",
                            fontFamily: 'TitilliumWeb-Regular',
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={Styles.errorMsg}>Por favor, insira um e-mail válido</Text>
                    </Animatable.View>
                }


                <Text style={[Styles.text_footer, {
                    color: "#333",
                    marginTop: 35
                }]}>Senha</Text>
                <View style={Styles.action}>
                    <Feather
                        name="lock"
                        color="#333"
                        size={20}
                    />
                    <TextInput
                        placeholder="Sua senha"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[Styles.textInput, {
                            color: "#333",
                            fontFamily: 'TitilliumWeb-Regular',
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={Styles.errorMsg}>A senha deve ter pelo menos 8 caracteres.</Text>
                    </Animatable.View>
                }


                <TouchableOpacity>
                    <Text style={{ color: '#333', marginTop: 15, fontFamily: 'TitilliumWeb-Light' }}>Esqueceu a sua senha?</Text>
                </TouchableOpacity>
                <View style={Styles.button}>
                    <TouchableOpacity
                        style={Styles.signIn}
                        onPress={() => { loginHandle(data.username, data.password) }}
                    >
                        <LinearGradient
                            colors={['orange', 'orange']}
                            style={Styles.signIn}
                        >
                            <Text style={[Styles.textSign, {
                                color: '#fff'
                            }]}>Entrar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[Styles.signIn, {
                            borderColor: 'orange',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[Styles.textSign, {
                            color: 'orange'
                        }]}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;