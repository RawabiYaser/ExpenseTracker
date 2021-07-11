import React from 'react';
import HomeP from './components/Pages/HomePage';
import List from './components/Pages/ListPage';

import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="HomeP"
              tabBarOptions={{
                activeTintColor: 'mediumvioletred',
              }}
            >
              <Tab.Screen
                name="Add"
                component={HomeP}
                options={{
                  tabBarLabel: 'Add Expense',
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="add-to-list" size={22} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="List"
                component={List}
                options={{
                  tabBarLabel: 'Expense List',
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="list" size={22} color="black" />
                  ),
                }}
              />
            </Tab.Navigator>
        </NavigationContainer>

    );
}