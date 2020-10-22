import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoTabs from './TodoTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name='Todos' component={TodoTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;