import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Registration from '../screens/Registration';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Registration: Registration
});
export default HomeStack;
