import React from 'react';
import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MovieCard.styles';

const MovieCard = ({movies, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: movies.image}} />
        <View style={styles.inner_container}>
          <Text style={styles.name}>{movies.name}</Text>
          <View style={styles.genre_container}>
            {movies.genre.map((genre, i) => {
              return (
                <View key={i}>
                  <Text style={styles.genre}>{genre}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.rate}>
            Movie Rate: <Icon name="star" size={16} /> {movies.rate} / 10
          </Text>
          <Text numberOfLines={2} style={styles.brief}>
            {movies.brief}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
