/**
 * Autonomum App
 * https://github.com/luisdourado33/Autonomum
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

// Page Styles
import Styles from './Styles';

// React Native Paper
import {
    Button,
    Avatar,
    Title,
    TextInput,
} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" color="orange" />

/**
 * Definições padrão
 */

import {
    defaultFont,
    Mock
} from '../../assets/default';


// Components
import CardSlide from '../../components/CardSlide/CardSlide';
import CardPublish from '../../components/CardPublish/CardPublish';
import Navbar from '../../components/Navbar';

// Fast-Messages
import * as Message from '../../assets/messages/DashboardScreenMsg';

// User-message mock
import UserMessage from '../../assets/userMessageMock';

const Main = () => {

    const { colors } = useTheme();
    const [progressNum, setProgressNum] = useState(0);
    const [text, setText] = useState('');
    const [news, setNews] = useState(UserMessage);
    const [isPublishing, setIsPublishing] = useState(true);

    const generateRandomNumber = (array) => {
        return Math.floor(Math.random() * array.length)
    }

    const addNews = () => {
        let dataAtual = new Date(Date.now());

        let dia = dataAtual.getDay();
        let mes = dataAtual.getMonth();
        let ano = dataAtual.getFullYear();

        if (text != '') {
            setNews(news => [...news,
            {
                mensagem: text,
                dia,
                mes,
                ano
            }
            ]);

            setText('');
            setIsPublishing(false);
        } else {
            alert('Mensagem vazia não permitida.')
        }
    }

    return (
        <ScrollView style={Styles.container}>
            <View
                style={Styles.container}>
                <StatusBar backgroundColor='black' barStyle="light-content" />
                <View style={Styles.header}>
                    <Navbar
                        notification={news.length}
                        sectionTitle="Dashboard" />
                </View>

                <View style={Styles.helloUser}>
                    <Title style={Styles.helloUserTitle}>
                        {Message.randomHello[generateRandomNumber(Message.randomHello)]}, {'\n'}<Text style={{ fontFamily: defaultFont('Bold') }}>
                            luisdourado33</Text>!
                    </Title>
                </View>

                <View style={Styles.searchContainer}>
                    <TextInput
                        style={Styles.searchInput}
                        theme={{
                            fonts: {
                                regular: {
                                    fontFamily: defaultFont('Light')
                                }
                            },
                            colors: { primary: 'orange', underlineColor: 'transparent', }
                        }}
                        selectionColor="orange"
                        underlineColor="orange"
                        label="O que você procura?"
                        mode="flat"
                        value={text}
                        onChangeText={text => setText(text)}
                    />

                    <TouchableOpacity>
                        <Button
                            color="orange"
                            mode="contained"
                        >
                            <FontAwesome
                                color="black"
                                name="search"
                                size={20} />
                        </Button>
                    </TouchableOpacity>
                </View>

                {isPublishing && <Animatable.View
                    animation={'slideInDown'}
                    duraton="1500"
                    style={{ padding: 15 }}>
                    <TextInput
                        style={{ marginBottom: 10, fontFamily: defaultFont('Light') }}
                        theme={{
                            fonts: {
                                regular: {
                                    fontFamily: defaultFont('Light')
                                }
                            },
                            colors: { primary: 'orange', underlineColor: 'transparent', }
                        }}
                        selectionColor="orange"
                        underlineColor="orange"
                        label="What's new?"
                        mode="outlined"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Button
                        labelStyle={{
                            fontFamily: defaultFont('Regular')
                        }}
                        uppercase={false}
                        color="orange"
                        icon="plus"
                        mode="contained"
                        onPress={addNews}>
                        Publicar ({news.length})
            </Button>
                </Animatable.View>}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {news &&
                        news.map(item => (
                            <Animatable.View
                                style={Styles.animatableContainer}
                                key={news.indexOf(item)}>
                                <Animatable.Image
                                    animation="bounceIn"
                                    duraton="1500"
                                    source={Mock.userPicture}
                                    style={Styles.userPicture}
                                    resizeMode="cover"
                                />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text
                                        style={{
                                            fontFamily: defaultFont('Regular'),

                                        }}>Luís Dourado</Text>
                                    <Text style={{ fontFamily: defaultFont('Light'), fontSize: 10 }}>Cadastro em {item.dia}/{item.mes}/{item.ano}</Text>
                                </View>
                            </Animatable.View>
                        ))
                    }
                </ScrollView>
                <ScrollView>
                    {news &&
                        news.map(item => (
                            <CardPublish
                                username={item.username}
                                ano={item.ano}
                                dia={item.dia}
                                mes={item.mes}
                                mensagem={item.mensagem}
                                role={item.role}
                                key={news.indexOf(item)}
                            />
                        ))
                    }
                </ScrollView>

            </View>
        </ScrollView>
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