import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { RectButton, } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val);
  }

  function handleCreateTodo() {
    api.post('create', { title: text })
      .then(() => {
        alert('Todo criado com sucesso');
      }).catch(() => {
        alert('Erro na criação do Todo');
      });
}

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Novo Todo...'
        onChangeText={changeHandler}
      />

      <RectButton
        style={styles.button}
        onPress={handleCreateTodo}
      >
        <Text style={styles.textButton}>Adicione um Todo</Text>
      </RectButton>       
    </View>
  );
};

export default AddTodo;
