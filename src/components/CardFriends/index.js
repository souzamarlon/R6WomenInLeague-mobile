import React, { useState, useEffect } from 'react';
import { Alert, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal, { ModalButton, ModalContent } from 'react-native-modals';

import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  ImageArea,
  Avatar,
  ButtonForModal,
  ModalLine,
  R6Name,
  UplayName,
  DiscordUser,
  R6Rank,
  R6PlayStyle,
  R6Info,
  AddRemove,
  AddRemoveButton,
  AvailableInfo,
  R6Ranked,
  R6Comp,
  R6Times,
  R6Region,
} from './styles';

export default function CardFriends({ dataR6, friendAdded, allData }) {
  const [playerData, setPlayerData] = useState([]);
  const [visible, setVisible] = useState(false);

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
        const { error } = err.response.data;
        // console.tron.log(error);
      }
    }

    getPlayerData();
  }, [dataR6]);

  async function removeFriend(id) {
    try {
      await api.delete(`/friendship/${id}`);

      Alert.alert(`${dataR6.name} was removed successfully.`);
      // history.go('/friends');
    } catch (err) {
      Alert.alert('Failure to remove your friend!');
    }
  }

  async function acceptFriend(id) {
    try {
      await api.put(`/friendship/${id}`, { accepted: true });

      Alert.alert(`Accepted ${dataR6.name} successfully`);
      // history.go('/friends');
    } catch (err) {
      Alert.alert('Failure to accept your friend!');
    }
  }

  async function reportFake(id) {
    try {
      await api.put(`/friendship/${id}`, {
        expose_fake: true,
        id_reported: dataR6.id,
      });

      Alert.alert(`${dataR6.name} was reported successfully.`);
      // history.go('/friends');
    } catch (err) {
      Alert.alert('Failure to remove your friend!');
    }
  }

  // console.tron.log(allData);

  return (
    <Container onPress={() => {}}>
      <ImageArea>
        <Avatar
          source={{
            uri: playerData.uri
              ? playerData.uri
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </ImageArea>
      <ButtonForModal title="Show Modal" onPress={() => setVisible(true)}>
        <Icon name="ellipsis-h" size={18} color="#DDD" />
      </ButtonForModal>
      <Modal
        visible={visible}
        onTouchOutside={() => setVisible(false)}
        width={200}
      >
        <ModalContent>
          <ModalButton text="Remove" onPress={() => removeFriend(allData.id)} />
          <ModalLine />
          <ModalButton
            text="Report a fake"
            onPress={() => reportFake(allData.id)}
          />
        </ModalContent>
      </Modal>
      {allData.accepted ? (
        <>
          <R6Name>{dataR6.name}</R6Name>
          <UplayName>{dataR6.uplay}</UplayName>

          {dataR6.discord_user ? (
            <DiscordUser>{dataR6.discord_user}</DiscordUser>
          ) : null}

          <R6Rank>
            {playerData.rank_text ? playerData.rank_text : 'Unranked'}
          </R6Rank>
          <R6PlayStyle>{`Play Style is ${dataR6.play_style}.`}</R6PlayStyle>
          <R6Info>Available to play:</R6Info>
          <R6Ranked status_ranked={dataR6.ranked}>RANKED</R6Ranked>
          <R6Comp status_competition={dataR6.competition}>CHAMPIONSHIP</R6Comp>
          <R6Times>{dataR6.times}</R6Times>
          <R6Region>{dataR6.region}</R6Region>
        </>
      ) : (
        <>
          <R6Name>{dataR6.name}</R6Name>
          <R6Rank>
            {playerData.rank_text ? playerData.rank_text : 'Unranked'}
          </R6Rank>
          <R6PlayStyle>{`Play Style is ${dataR6.play_style}.`}</R6PlayStyle>
          <R6Info>Available to play:</R6Info>
          <AddRemove>
            <AddRemoveButton onPress={() => removeFriend(allData.id)}>
              <Icon name="thumbs-down" size={32} color="#F90733" />
            </AddRemoveButton>
            <AvailableInfo>
              <R6Ranked status_ranked={dataR6.ranked}>RANKED</R6Ranked>
              <R6Comp status_competition={dataR6.competition}>
                CHAMPIONSHIP
              </R6Comp>
              <R6Times>{dataR6.times}</R6Times>
              <R6Region>{dataR6.region}</R6Region>
            </AvailableInfo>
            {allData.user.id === dataR6.id ? (
              <AddRemoveButton onPress={() => acceptFriend(allData.id)}>
                <Icon name="heart" size={32} color="#29F907" />
              </AddRemoveButton>
            ) : (
              <AddRemoveButton enabled={false}>
                <Icon name="hourglass-1" size={22} color="#999" />
              </AddRemoveButton>
            )}
          </AddRemove>
        </>
      )}
    </Container>
  );
}
