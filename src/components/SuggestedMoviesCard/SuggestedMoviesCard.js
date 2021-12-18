import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import routes from '../../navigation/routes';
import styles from './SuggestedMoviesCard.styles';

const SuggestedMoviesCard = ({movies}) => {
  const navigation = useNavigation();

  const handleSuggestedNavigation = id => {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {id});
  };

  const onSelect = () => handleSuggestedNavigation(movies.item.id);

  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Image source={{uri: movies.item.image}} style={styles.image} />
    </TouchableOpacity>
  );
};
export default SuggestedMoviesCard;
