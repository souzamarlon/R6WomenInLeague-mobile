import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import Card from '~/components/Card';

import api from '~/services/api';
import { Container, Content, CardList, ButtonSwitchPages } from './styles';

export default function Dashboard() {
  const [refreshList, setRefreshList] = useState(false);
  const [r6Data, setR6Data] = useState([]);
  const [friendAdded, setFriendAdded] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function SearchFun() {
      try {
        const response = await api.get(`users`, {
          params: {
            page,
            per_page: 1,
          },
        });

        if (response.data.length <= 0) {
          return Alert.alert('Hi, We did not find more users!');
        }

        setR6Data(response.data);
        setRefreshList(false);
      } catch (err) {
        const { error } = err.response.data;

        // toast.error(`Failure!, ${error}`);
      }
    }

    SearchFun();
  }, [page, refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  function handlePage(action) {
    // const count = action === 'back' ? page - 1 : page + 1;
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Background>
      <Container>
        <ButtonSwitchPages
          onPress={() => handlePage('back')}
          enabled={!(page <= 1)}
        >
          <Icon
            name="navigate-before"
            size={34}
            color="rgba(255, 255, 255, 0.6)"
          />
        </ButtonSwitchPages>
        <Content>
          <CardList
            data={r6Data}
            refreshing={refreshList}
            onRefresh={loadPage}
            numColumns={1}
            // horizontal
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item: data }) => <Card dataR6={data} />}
          />
        </Content>

        <ButtonSwitchPages
          onPress={() => handlePage('next')}
          enabled={r6Data.length >= 1}
        >
          <Icon
            name="navigate-next"
            size={34}
            color="rgba(255, 255, 255, 0.6)"
          />
        </ButtonSwitchPages>
      </Container>
    </Background>
  );
}
