import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import AboutScreen from './../screens/AboutScreen';
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from './../screens/SearchScreen';
import LocationScreen from './../screens/LocationScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle:{backgroundColor:'#fff', elevation:0, borderTopWidth:0},           
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'orangered',
            tabBarInactiveTintColor: '#DDDDDD',
            headerShown:false,
        }}>

            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarIcon: ({color})=> <Icon name="home" size={18} color={color}/> }}/>
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ tabBarIcon: ({color})=> <Icon name="search" size={18} color={color}/> }}/>
            <Tab.Screen name="LocationScreen" component={LocationScreen} options={{ tabBarIcon: ({color})=> <Icon name="map-pin" size={18} color={color}/> }}/>
            <Tab.Screen name="AboutScreen" component={AboutScreen} options={{ tabBarIcon: ({color})=> <Icon name="user" size={18} color={color}/> }}/>


        </Tab.Navigator>    
    )
}

export default BottomNavigation;
