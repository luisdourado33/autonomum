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
    Title,
    Caption,
    TextInput,
    FAB
} from 'react-native-paper';

/**
 * Definições padrão
 */

import {
    defaultFont,
    Mock
} from '../../assets/default';

/**
 * Helpers
 */

import Helper from '../../helpers/functions';

// Components
import CardPublish from '../../components/CardPublish/CardPublish';
import Navbar from '../../components/Navbar';

// Fast-Messages
import * as Message from '../../assets/messages/DashboardScreenMsg';

// User-message mock
import UserMessage from '../../assets/userMessageMock';

const Main = () => {

    const [text, setText] = useState('');
    const [news, setNews] = useState(UserMessage);

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
                        {Message.randomHello[Helper.generateRandomNumber(Message.randomHello)]}, {'\n'}<Text style={{ fontFamily: defaultFont('Bold') }}>
                            Luís Dourado</Text>!
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
                <View style={Styles.titleContainer}>
                    <View>
                        <Title style={Styles.title}>Membros</Title>
                        <Caption style={Styles.caption}>Cadastrados nas últimas 24 horas</Caption>
                    </View>
                    <FontAwesome name="user-o" size={25} />
                </View>
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

                                        }}>{item.username}</Text>
                                    <Text style={{ fontFamily: defaultFont('Light'), fontSize: 10 }}>Cadastro em {item.dia}/{item.mes}/{item.ano}</Text>
                                </View>
                            </Animatable.View>
                        ))
                    }
                </ScrollView>

                <View style={Styles.titleContainer}>
                    <View>
                        <Title style={Styles.title}>Publicações</Title>
                        <Caption style={Styles.caption}>Encontre profissionais qualificados</Caption>
                    </View>
                    <FontAwesome name="comment-o" size={25} />
                </View>
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
    return (
        <Main />
    );
};

export default DashboardScreen;