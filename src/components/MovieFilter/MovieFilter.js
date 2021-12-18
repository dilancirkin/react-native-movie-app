import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Button from '../Button';
import styles from './MovieFilter.styles';

const MovieFilter = ({onGenreSelect, onClearGenre}) => {
  const {data: filterData} = useFetch(`${Config.API_URL}/genres`);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Filter" onPress={toggleModal} />
      <View style={styles.modal_container}>
        <Modal
          style={styles.modal}
          scrollHorizontal={true}
          onBackdropPress={toggleModal}
          isVisible={isModalVisible}>
          <Button
            theme="secondary"
            onPress={() => {
              onClearGenre();
              closeModal();
            }}
            title="ALL"
            icon={'movie-open'}
          />
          {!!filterData &&
            filterData.map(d => (
              <Button
                theme="secondary"
                key={d.id}
                onPress={() => {
                  onGenreSelect(d);
                  closeModal();
                }}
                title={d.name}
                icon={d.icon}
              />
            ))}
        </Modal>
      </View>
    </View>
  );
};

export default MovieFilter;
