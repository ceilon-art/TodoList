import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons, Feather } from '@expo/vector-icons';

import TodoList from '../pages/TodoList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function TodoTabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },

                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },

                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },

                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen 
                options={{
                    tabBarLabel: 'Todos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name='book-open' size={size} color={focused ? 'coral' : color} />
                        );
                    }
                }}
                name='TodoList' 
                component={TodoList} 
            />
            <Screen 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name='ios-heart' size={size} color={focused ? 'red' : color} />
                        );
                    }
                }}
                name='Favorites' 
                component={Favorites} 
            />
        </Navigator>
    );
}

export default TodoTabs;