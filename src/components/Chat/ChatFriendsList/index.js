import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import api from '~/services/api';

import { Container, Avatar, Info, UserName, Text } from './styles';

export default function ChatFriendsList({ friendData, onPress }) {
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    async function getPlayerData() {
      try {
        if (friendData.uplay) {
          const response = await api.get('/stats', {
            params: {
              username: friendData.uplay,
              platform: 'pc',
              type: 'seasonal',
            },
          });

          const { data } = response;

          setAvatar({
            avatar_url: data.avatar_url_256
              ? data.avatar_url_256
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          });
        }
      } catch (err) {
        // Alert.alert('Failure!');
      }
    }

    getPlayerData();
  }, [friendData]);

  return (
    <Container onPress={onPress}>
      <Avatar
        source={{
          uri: avatar.avatar_url
            ? avatar.avatar_url
            : 'https://api.adorable.io/avatars/50/abott@adorable.png',
        }}
      />
      <Info>
        <UserName>{friendData.name}</UserName>
        {friendData.status ? (
          <Text status>Online</Text>
        ) : (
          <Text status={false}>Offline</Text>
        )}
      </Info>
    </Container>
  );
}
