import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieRate.styles';

const MovieRate = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rate}>
        Movie Rate: <Icon name="star" size={18} /> {data} / 10
      </Text>
    </View>
  );
};
export default MovieRate;
