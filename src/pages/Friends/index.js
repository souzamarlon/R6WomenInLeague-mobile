import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '~/components/CardFriends';
import Background from '~/components/Background';

import api from '~/services/api';

import {
  Container,
  Content,
  CardList,
  Menu,
  MyFriendsButton,
  FriendRequests,
} from './styles';

export default function Friends() {
  const [r6Data, setR6Data] = useState([]);
  const [page, setPage] = useState(1);
  const [myFriends, setMyFriends] = useState(true);
  const [request, setRequest] = useState(false);

  const { id } = useSelector((state) => state.user.profile);

  useEffect(() => {
    async function SearchFun() {
      try {
        if (myFriends) {
          const response = await api.get(`friendship`, {
            params: {
              accepted: true,
              page,
              per_page: 14,
            },
          });

          return setR6Data(response.data);
        }

        const response = await api.get(`friendship`, {
          params: {
            page,
            per_page: 14,
          },
        });

        setR6Data(response.data);
      } catch (err) {
        Alert.alert('Failure!');
      }
    }

    SearchFun();
  }, [page, myFriends, request]);

  function handlePage(action) {
    // const count = action === 'back' ? page - 1 : page + 1;
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Background>
      <Container>
        <Menu>
          <MyFriendsButton onPress={() => setMyFriends(true) || setPage(1)} />
          <FriendRequests onPress={() => setMyFriends(false) || setPage(1)} />
        </Menu>
        <Content>
          <CardList
            data={r6Data}
            // refreshing={refreshList}
            // onRefresh={loadPage}
            // numColumns={1}
            horizontal
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item: data }) => (
              <Card
                dataR6={data.user_friend === id ? data.user : data.friend}
                allData={data}
              />
            )}
          />
        </Content>
      </Container>
    </Background>
  );
}
