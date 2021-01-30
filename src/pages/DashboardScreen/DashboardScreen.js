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
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

// Page Styles
import Styles from './Styles';

// React Native Paper
import {
    ProgressBar,
    Colors,
    Button,
    Avatar,
    Card,
    Title,
    TextInput,
    Paragraph
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
import Navbar from '../../components/Navbar';
import Greeting from '../../components/Greeting';

// Fast-Messages
import * as Message from '../../assets/messages/DashboardScreenMsg';

const CardMock = () => (
    <View style={{ padding: 15 }}>
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    </View>
);

const Main = () => {

    const { colors } = useTheme();
    const [progressNum, setProgressNum] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(Date.now());
    const [news, setNews] = useState([]);

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
        } else {
            alert('Mensagem vazia não permitida.')
        }
    }

    return (
        <View
            style={Styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={Styles.header}>
                <Navbar
                    notification={news.length}
                    sectionTitle="Dashboard" />
                {/* <Greeting username="Luís" /> */}
            </View>
            <ProgressBar progress={progressNum} color={'orange'} />

            <View style={{ padding: 15 }}>
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
                    Inserir mensagem ({news.length})
            </Button>
            </View>
            <ScrollView>
                {news &&
                    news.map(item => (
                        <Animatable.View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 15,
                                borderColor: '#eee',
                                borderRadius: 2,
                                elevation: 0,
                                borderWidth: 1,
                                margin: 15
                            }}
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

                                    }}>{item.mensagem}</Text>
                                <Text style={{ fontFamily: defaultFont('Light'), fontSize: 10 }}>Publicado em {item.dia}/{item.mes}/{item.ano}</Text>
                            </View>
                        </Animatable.View>
                    ))
                }
            </ScrollView>

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