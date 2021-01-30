/**
 * Autonomum v1
 * 
 * Drawer Section
 * @format
 */

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import DashboardScreen from '../DashboardScreen/DashboardScreen';

// Drawer Content
import { DrawerContent } from './DrawerContent/DrawerContent';

// Drawer Instance
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return (
        <NavigationContainer independent>
            <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: "Dashboard"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerScreen;