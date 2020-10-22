import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { EvilIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/icons/unfavorite.png';

import styles from './styles';
import api from '../../services/api';

interface Props {
    id?: number;
    title: string;
    favorited?: boolean;
}

const TodoItem: React.FC<Props> = ({ id, title, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);
    
    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

            if(favorites) {
                favoritesArray = JSON.parse(favorites);
            }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((todoItem: Props) => {
                return todoItem.id === id;
            })

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {    
            favoritesArray.push({ id, title });

            setIsFavorited(true);
        }
        
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    async function handleDelete() {
        await api.delete('delete', { data: { id } })
            .then(() => {
                alert("Todo deletado com sucesso")
            }).catch(() => {
                alert("Erro ao deletar Todo")
            })
    }

    return ( 
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>     

                <View style={styles.buttonsContainer}>
                    <BorderlessButton 
                        onPress={handleToggleFavorite}
                        style={[
                                styles.favoriteButton,
                                isFavorited ? styles.favorited : {},
                            ]}
                        >
                        { isFavorited
                            ? <Image source={heartOutlineIcon} />
                            : <Image source={unFavoriteIcon} /> 
                        }  
                    </BorderlessButton>
                    
                    <BorderlessButton onPress={handleDelete}>
                        <EvilIcons style={styles.delete} name="trash" size={40} color="red" />
                    </BorderlessButton>
                </View>
            </View>  
    );
}

export default TodoItem;
