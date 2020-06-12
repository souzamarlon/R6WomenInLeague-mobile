import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SvgUri } from 'react-native-svg';

import api from '~/services/api';

import { Container, ImageArea, RankImg, Avatar } from './styles';

export default function Card({ dataR6 }) {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    async function getPlayerData() {
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
                rank_image: ncsa[0].rank_image, // It will return the most updated data from this user.
              });
              break;
            case 'Europe':
            case 'Africa':
              setPlayerData({
                username: data.username,
                uri: data.avatar_url_256,
                rank_image: emea[0].rank_image, // It will return the most updated data from this user.
              });
              break;
            case 'Asia':
            case 'Oceania':
              setPlayerData({
                username: data.username,
                uri: data.avatar_url_256,
                rank_image: apac[0].rank_image, // It will return the most updated data from this user.
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
    }

    getPlayerData();
  }, [dataR6]);

  console.tron.log(playerData);

  return (
    <Container>
      <ImageArea>
        <Avatar
          source={{
            uri: playerData.uri
              ? playerData.uri
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </ImageArea>
      <SvgUri
        width="100px"
        height="100px"
        uri="https://cdn.r6stats.com/seasons/ranks/champions.svg"
      />
      {/* <SvgUri uri="https://cdn.r6stats.com/seasons/ranks/champions.svg" /> */}
    </Container>
  );
}
