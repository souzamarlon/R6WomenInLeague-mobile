import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Card from '~/components/Card';
import SearchTool from '~/components/SearchTool';
import Background from '~/components/Background';

import api from '~/services/api';

import { Container, Content, CardList } from './styles';

export default function Search() {
  const [playerData, setPlayerData] = useState([]);
  const [r6Data, setR6Data] = useState([]);
  const [page, setPage] = useState(1);
  const [friendAdded, setFriendAdded] = useState([]);

  useEffect(() => {
    async function SearchFun() {
      if (playerData.length !== 0) {
        const response = await api.get(`users`, {
          params: {
            play_style: playerData.play_style,
            ranked: playerData.ranked,
            competition: playerData.competition,
            times: playerData.times,
            page,
            per_page: 1,
          },
        });

        if (response.data.length <= 0) {
          return Alert.alert('Hi, We did not find more users!');
        }

        setR6Data(response.data);
      }
    }

    SearchFun();
  }, [playerData, page]);

  console.tron.log(playerData);

  return (
    <Background>
      <Container>
        <Content isAlign={!!playerData.length}>
          {playerData.length !== 0 ? (
            <CardList
              data={r6Data}
              // refreshing={refreshList}
              // onRefresh={loadPage}
              numColumns={1}
              // horizontal
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item: data }) => <Card dataR6={data} />}
            />
          ) : (
            <SearchTool onChange={setPlayerData} />
          )}
        </Content>
      </Container>
    </Background>
  );
}
