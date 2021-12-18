import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MovieDetailArea.styles';
const MovieDetailArea = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.left_container}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.director}>
            Director <Icon name="video-vintage" size={16} />
            {`\n${data.director}`}
          </Text>
          <View styles={styles.genre_container}>
            <Text style={styles.genre_title}>
              Genres <Icon name="play-box-outline" size={16} />{' '}
            </Text>
            {data.genre.map((genre, i) => {
              return (
                <View key={i}>
                  <Text style={styles.genre}>{genre}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.cast_container}>
            <Text style={styles.cast}>
              Cast <Icon name="account-group-outline" size={16} />
            </Text>
            {data.cast.map((cast, i) => {
              return (
                <Text key={i} style={styles.cast_map}>
                  {cast}
                </Text>
              );
            })}
          </View>
        </View>
        <Image source={{uri: data.image}} style={styles.image} />
      </View>
      <Text style={styles.brief}> {data.brief}</Text>
    </View>
  );
};

export default MovieDetailArea;
