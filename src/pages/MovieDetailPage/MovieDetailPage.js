import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import {SafeAreaView, FlatList, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './MovieDetailPage.styles';
import useFetch from '../../hooks/useFetch';
import MovieDetailArea from '../../components/MovieDetailArea';
import MovieRate from '../../components/MovieRate';
import SuggestedMoviesCard from '../../components/SuggestedMoviesCard';
import Input from '../../components/Input';
import MovieComment from '../../components/MovieComment/MovieComment.js';

const MovieDetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const [comments, setComments] = useState();
  const {data: movieDetail} = useFetch(`${Config.API_URL}/movies/${id}`);
  const {data: suggestions} = useFetch(
    !!movieDetail &&
      `${Config.API_URL}/movies?genre_like=${movieDetail.genre.join(
        '&genre_like=',
      )}`,
  );
  const {data: initialCommentsData} = useFetch(
    !!movieDetail && `${Config.API_URL}/comments?movieId=${id}`,
  );

  useEffect(() => {
    if (initialCommentsData != null) {
      setComments(initialCommentsData);
    }
  }, [initialCommentsData]);

  if (!movieDetail) {
    return null;
  }

  function handleAddContent(content) {
    sendContent(content);
  }

  const sendContent = content => {
    const contentObject = {
      comment: content,
    };
    setComments([...comments, contentObject]);
  };

  const renderSuggested = suggestedData => (
    <SuggestedMoviesCard movies={suggestedData} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MovieDetailArea data={movieDetail} />
        <MovieRate data={movieDetail.rate} />
        <FlatList horizontal data={suggestions} renderItem={renderSuggested} />
        <Input placeholder={'Add a Comment'} onAdd={handleAddContent} />
        <MovieComment comments={comments} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailPage;
