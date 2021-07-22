import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo} from '@expo/vector-icons';

import StackNavigator from './StackNavigator'
import HomeP from '../components/Pages/HomePage';
import List from '../components/Pages/ListPage';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {

    return (
            <Tab.Navigator
              initialRouteName="HomeP"
              tabBarOptions={{
                activeTintColor: 'mediumvioletred',
                style:{backgroundColor: 'lavender'}
              }}
            >
              <Tab.Screen
                name="Add"
                component={StackNavigator}
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
    );
};