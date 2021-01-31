import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Page import
import DrawerScreen from '../navigation/DrawerScreen';
import BottomTabScreen from '../navigation/BottomTabScreen';
import SplashScreen from '../../pages/SplashScreen/SplashScreen';
import SignInScreen from '../SignInScreen/SignInScreen';
import OnboardingScreen from '../OnboardingScreen/OnboardingScreen';
import DashboardScreen from '../DashboardScreen/DashboardScreen';

// Building stack constant
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode='none' initialRouteName='SplashScreen'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <RootStack.Screen name="DashboardScreen" component={DashboardScreen} />
            <RootStack.Screen name="DrawerScreen" component={DrawerScreen} />
            <RootStack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        </RootStack.Navigator>
    );
}

export default RootStackScreen;