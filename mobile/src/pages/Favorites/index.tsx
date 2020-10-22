import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TodoItem from '../../components/TodoItem';
import { Todos } from '../TodoList';

import styles from './styles';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites () {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favorited = JSON.parse(response);

                setFavorites(favorited);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title='Meus Todos favoritos' />

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((todo: Todos) => {
                    return (                        
                        <TodoItem 
                            id={todo.id}
                            title={todo.title}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;