import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeP from '../components/Pages/HomePage';
import List from '../components/Pages/ListPage';


const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator  screenOptions={{
                             headerShown: false
                           }}>
              <Stack.Screen name="Home" component={HomeP} />
              <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    );
};