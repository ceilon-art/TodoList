import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TodoItem from '../../components/TodoItem';
import AddTodo from '../../components/AddTodo';

import api from '../../services/api';

import styles from './styles';

import AsyncStorage from '@react-native-community/async-storage';

import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export interface Todos {
    id: number;
    title: string;
}

function TodoList() {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await api.get('/')

                setTodos(request.data);

                return request;
            } catch {
                throw new Error;
            }            
        }

        loadFavorites();
        fetchData();
    }, [todos])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTodos = JSON.parse(response);
                const favoritedTodosIds = favoritedTodos.map((todo: Todos) => {
                    return todo.id;
                })

                setFavorites(favoritedTodosIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title='Meus Todos' />
            <View style={styles.content}>

            </View>

            <AddTodo />

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.list}>
                    {todos.map((todo: Todos) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            favorited={favorites.includes(todo.id)}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default TodoList;