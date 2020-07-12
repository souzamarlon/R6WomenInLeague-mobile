import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Avatar, Info, UserName, Text } from './styles';

export default function ChatFriendsList({ friendData }) {
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    async function getPlayerData() {
      if (friendData.uplay) {
        const { data } = await api.get('/stats', {
          params: {
            username: friendData.uplay,
            platform: 'pc',
            type: 'seasonal',
          },
        });

        setAvatar({
          avatar_url: data.avatar_url_256,
        });
      }
    }

    getPlayerData();
  }, [friendData]);

  return (
    <Container>
      <Avatar
        // source={{
        //   uri: playerData.uri
        //     ? playerData.uri
        //     : 'https://api.adorable.io/avatars/50/abott@adorable.png',
        // }}
        source={{
          uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
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
