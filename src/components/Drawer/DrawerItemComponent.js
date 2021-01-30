import React from 'react';
import {
    DrawerItem
} from '@react-navigation/drawer';

/**
 * Definições padrão
 */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    defaultFont,
    Mock
} from '../../assets/default';

const DrawerItemComponent = (props) => {
    return (
        <DrawerItem
            icon={({ color, size }) => (
                <Icon
                    name={props.icon}
                    color={color}
                    size={size}
                />
            )}
            labelStyle={{
                fontFamily: defaultFont('Light')
            }}
            label={props.label}
            onPress={() => alert(props.message)}
        />
    );
}

export default DrawerItemComponent;