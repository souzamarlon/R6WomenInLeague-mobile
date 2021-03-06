import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import api from '~/services/api';

import ChatFriendsList from '~/components/Chat/ChatFriendsList';

import { Container } from './styles';

export default function Chat({ navigation }) {
  const [friendId, setFriendId] = useState();
  const [friendsData, setFriendsData] = useState([]);

  const [refreshList, setRefreshList] = useState(false);

  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    async function SearchFun() {
      try {
        const response = await api.get(`friendship`, {
          params: {
            accepted: true,
            page: 1,
            per_page: 30,
          },
        });

        const allData = response.data.map((item) =>
          item.user_id === userId
            ? {
                id: item.friend.id,
                name: item.friend.name,
                uplay: item.friend.uplay,
                ranked: item.friend.ranked,
                competition: item.friend.competition,
                times: item.friend.times,
                play_style: item.friend.play_style,
                discord_user: item.friend.discord_user,
                region: item.friend.region,
                status: item.status,
              }
            : {
                id: item.user.id,
                name: item.user.name,
                uplay: item.user.uplay,
                ranked: item.user.ranked,
                competition: item.user.competition,
                times: item.user.times,
                play_style: item.user.play_style,
                discord_user: item.user.discord_user,
                region: item.user.region,
                status: item.status,
              }
        );

        setFriendsData(allData);
        setRefreshList(false);
      } catch (err) {
        Alert.alert('Failure!');
      }
    }

    SearchFun();
  }, [friendId, userId, refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  function handleSelectFriend(id) {
    navigation.navigate('ChatMessages', {
      friendId: id,
    });
    setFriendId(id);
  }

  return (
    <Background>
      <Container
        // ref={flatListRef}
        data={friendsData}
        refreshing={refreshList}
        onRefresh={loadPage}
        // horizontal
        // numColumns={2}
        // initialNumToRender={14}
        // scrollEventThrottle={400}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: data }) => (
          <ChatFriendsList
            friendData={data}
            onPress={() => handleSelectFriend(data.id)}
          />
        )}
      />
    </Background>
  );
}

Chat.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
