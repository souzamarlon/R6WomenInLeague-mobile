import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  ImageArea,
  Avatar,
  R6Name,
  R6Rank,
  R6PlayStyle,
  R6Info,
  R6Ranked,
  R6Comp,
  R6Times,
  R6Region,
} from './styles';

export default function Card({ dataR6, friendAdded }) {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    async function getPlayerData() {
      try {
        if (dataR6) {
          const { uplay } = dataR6;
          const response = await api.get('/stats', {
            params: {
              username: uplay,
              platform: 'pc',
              type: 'seasonal',
            },
          });

          if (response) {
            const { data } = response;

            const { ncsa, emea, apac } = data.seasons[
              Object.keys(data.seasons)[0]
            ].regions;

            switch (dataR6.region) {
              case 'South America':
              case 'North America':
                setPlayerData({
                  username: data.username,
                  uri: data.avatar_url_256,
                  rank_text: ncsa[0].rank_text, // It will return the most updated data from this user.
                });
                break;
              case 'Europe':
              case 'Africa':
                setPlayerData({
                  username: data.username,
                  uri: data.avatar_url_256,
                  rank_text: emea[0].rank_text, // It will return the most updated data from this user.
                });
                break;
              case 'Asia':
              case 'Oceania':
                setPlayerData({
                  username: data.username,
                  uri: data.avatar_url_256,
                  rank_text: apac[0].rank_text, // It will return the most updated data from this user.
                });
                break;
              default:
                setPlayerData({
                  uri: data.avatar_url_256,
                  ncsa,
                  emea,
                  apac,
                });
            }
          }
        }
      } catch (err) {
        // const { error } = err.response.data;
        // console.tron.log(error);
      }
    }

    getPlayerData();
  }, [dataR6]);

  async function addFriend(id) {
    try {
      await api.post(`/friendship/${id}`);

      friendAdded(id);
      Alert.alert(`Added ${dataR6.name} successfully`);
    } catch (err) {
      Alert.alert('Failure to add your friend!');
    }
  }
  // console.tron.log(dataR6);

  return (
    <Container onPress={() => addFriend(dataR6.id)}>
      <ImageArea>
        <Avatar
          source={{
            uri: playerData.uri
              ? playerData.uri
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </ImageArea>

      <R6Name>{dataR6.name}</R6Name>
      <R6Rank>
        {playerData.rank_text ? playerData.rank_text : 'Unranked'}
      </R6Rank>
      <R6PlayStyle>{`Play Style is ${dataR6.play_style}.`}</R6PlayStyle>
      <R6Info>Available to play:</R6Info>
      <R6Ranked status_ranked={dataR6.ranked}>RANKED</R6Ranked>
      <R6Comp status_competition={dataR6.competition}>CHAMPIONSHIP</R6Comp>
      <R6Times>{dataR6.times}</R6Times>
      <R6Region>{dataR6.region}</R6Region>
    </Container>
  );
}

Card.propTypes = {
  dataR6: PropTypes.shape({
    uplay: PropTypes.string,
    region: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    play_style: PropTypes.string,
    ranked: PropTypes.bool,
    competition: PropTypes.bool,
    times: PropTypes.string,
  }).isRequired,
  friendAdded: PropTypes.number.isRequired,
};
