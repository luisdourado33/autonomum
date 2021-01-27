import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
    Stylesheet,
    StatusBar,
    Image,
    Button,
    Alert
} from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// Page Styles
import Styles from './Styles.js';

// Dimensoes
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

// Default messages
import {
    onboarding1Title,
    onboarding1Description,
    onboarding2Title,
    onboarding2Description
} from '../../assets/messages/OnboardingScreenMsg';

// Onboarding library
import Onboarding from 'react-native-onboarding-swiper';

// Remove it after test
const img1 = require('../../assets/onboarding/img/img1.jpg');
const img2 = require('../../assets/onboarding/img/happy-people.png');

const backgroundColor = isLight => (isLight ? '#eee' : '#eee');
const color = isLight => backgroundColor(!isLight);

const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
        title={'Pular'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    >
        {skipLabel}
    </Button>
);

const OnboardingScreen = ({ navigation }) => {

    const doneAction = () => {
        Alert.alert('Autonomum', 'Você será redirecionado para o painel.')
        navigation.navigate('DashboardScreen')
    }
    return (
        <>
            <StatusBar backgroundColor={'black'} />
            <Onboarding

                onSkip={doneAction}
                onDone={doneAction}
                titleStyles={Styles.titleStyle}
                subTitleStyles={Styles.subTitleStyle}
                skipLabel="Pular"
                nextLabel="Avançar"
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={img1} style={{ width: 300, height: 300 }} />,
                        title: onboarding1Title,
                        subtitle: onboarding1Description
                    },
                    {
                        backgroundColor: 'orange',
                        image: <Image source={img2} style={{ width: Width - 95, height: Height - 600 }} />,
                        title: onboarding2Title,
                        subtitle: onboarding2Description
                    },
                ]}
            />
        </>
    );
};

export default OnboardingScreen;