import React from 'react';
import PageDailyPicture from '../pages/PageDailyPicture';
import PageNearEarthObject from '../pages/PageNearEarthObject';
import Header from '../components/Header';
import Home from '../components/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Routes() {
    const tabBarOptions = {
        tabBarActiveTintColor: '#B0C4DE', //
        tabBarInactiveTintColor: '#4682B4',
        tabBarItemStyle: {backgroundColor: 'transparent'},
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: '12px', color: 'white' },
        tabBarBackground: () => (<LinearGradient colors={['#191970', '#6A5ACD']} style={{width: '100%', height: '100%'}} />),
        header: () => (<Header />)
    }
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen name='Home' component={Home} 
                options={{ tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" size={size} color={color}/>) }} />
            <Tab.Screen name='Near Eath Object' component={PageNearEarthObject}
                options={{ tabBarIcon: ({ size, color }) => (
                <Ionicons name="list" size={size} color={color}/>) }} />
            <Tab.Screen name='Daily Picture' component={PageDailyPicture}
                options={{ tabBarIcon: ({ size, color }) => (
                <Ionicons name="image" size={size} color={color}/>) }} />
        </Tab.Navigator>
    );
}