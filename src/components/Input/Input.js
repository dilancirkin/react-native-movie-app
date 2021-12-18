import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../Button/Button';
import styles from './Input.styles';
import colors from '../../styles/colors';

const Input = ({onAdd, placeholder}) => {
  const [text, setText] = useState(null);

  function handleAdd() {
    if (!text) {
      return;
    }
    onAdd(text);
    setText(null);
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          clearTextOnFocus
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          style={styles.input}
          onChangeText={setText}
          autoCorrect={false}
        />
      </View>
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};
export default Input;
