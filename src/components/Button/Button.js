import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.styles';

const Button = ({title, onPress, icon, theme = 'default'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].button_container}>
      <Text style={styles[theme].title}>{title}</Text>
      <Icon style={styles[theme].icon} size={24} name={icon} />
    </TouchableOpacity>
  );
};
export default Button;
