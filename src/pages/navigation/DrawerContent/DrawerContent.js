/**
 * Autonomum v1
 * 
 * Drawer Section
 * @format
 */

import React, { useState } from 'react';
import {
    Button,
    View,
} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

// Page Styles
import Styles from './Styles';

// Componentes
import DrawerItemComponent from '../../../components/Drawer/DrawerItemComponent';

/**
 * Definições padrão
 */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    defaultFont,
    Mock
} from '../../../assets/default';


export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={Styles.drawerContent}>
                    <View style={Styles.userInfoSection}>
                        <View style={Styles.avatarAndUserDataCont}>
                            <Avatar.Image
                                source={Mock.userPicture}
                                size={50}
                            />
                            <View style={Styles.usernameAndEmail}>
                                <Title style={Styles.title}>Luís Dourado</Title>
                                <Caption style={Styles.caption}>Engenheiro de Software</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={Styles.drawerSection}>
                        <DrawerItemComponent
                            icon="home-outline"
                            label="Serviços"
                            message="Botão de serviços"
                        />
                        <DrawerItemComponent
                            icon="account-outline"
                            label="Perfil"
                            message="Botão de perfil"
                        />
                        <DrawerItemComponent
                            icon="account-check-outline"
                            label="Suporte"
                            message="Botão de suporte"
                        />
                    </Drawer.Section>
                    <Drawer.Section
                        labelStyle={{
                            fontFamily: defaultFont('Bold')
                        }}
                        title="Preferências">
                        <DrawerItemComponent
                            icon="cog-outline"
                            label="Configurações"
                            message="Botão de configurações"
                        />
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={Styles.preference}>
                                <Text style={{ fontFamily: defaultFont('Regular') }}>Modo escuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={Styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    labelStyle={{
                        fontFamily: defaultFont('SemiBold')
                    }}
                    label="Fazer logoff"
                    onPress={() => alert('Logoff')}
                />
            </Drawer.Section>
        </View>
    );
}