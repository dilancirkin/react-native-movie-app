import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MovieComment.styles';

const MovieComment = ({comments}) => {
  if (!comments) {
    return null;
  }

  return (
    <View>
      {comments.length !== 0 ? (
        !!comments &&
        comments.map((c, i) => (
          <View key={i} style={styles.container}>
            <Text style={styles.comments}>{c.comment}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.comments}>
          Be the first to comment on this movie.{' '}
          <Icon name="comment" size={14} />
        </Text>
      )}
    </View>
  );
};

export default MovieComment;
