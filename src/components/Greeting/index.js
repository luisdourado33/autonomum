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

const Greeting = (props) => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity>
                <Text style={Styles.title}>Olá, {props.username}!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Greeting;