import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/MovieCard';
import MovieFilter from '../../components/MovieFilter';
import routes from '../../navigation/routes';
import styles from './MoviePage.styles';

const MoviePage = () => {
  const navigation = useNavigation();
  const {data} = useFetch(`${Config.API_URL}/movies`);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(data);
  }, [data]);

  const handleGenreSelect = selectedGenre => {
    const filteredMovies = data.filter(
      d => d.genre.indexOf(selectedGenre.name) >= 0,
    );
    setDisplayList(filteredMovies);
  };

  const handleClearGenre = () => {
    setDisplayList(data);
  };

  const handleMovieDetail = id => {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {id});
  };

  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => handleMovieDetail(item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MovieFilter
        onGenreSelect={handleGenreSelect}
        onClearGenre={handleClearGenre}
      />
      <FlatList
        data={displayList}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={item => item.id}
        initialNumToRender={8}
      />
    </SafeAreaView>
  );
};
export default MoviePage;
