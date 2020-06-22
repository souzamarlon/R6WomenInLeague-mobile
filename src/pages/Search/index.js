import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '~/components/Card';
import SearchTool from '~/components/SearchTool';
import Background from '~/components/Background';

import api from '~/services/api';

import {
  Container,
  Content,
  CardList,
  ButtonSwitchPages,
  ResetButton,
  ResetText,
} from './styles';

export default function Search() {
  const [playerData, setPlayerData] = useState([]);
  const [r6Data, setR6Data] = useState([]);
  const [page, setPage] = useState(1);
  const [friendAdded, setFriendAdded] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const flatListRef = useRef();

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
            per_page: 14,
          },
        });

        if (response.data.length <= 0) {
          return Alert.alert('Hi, We did not find more users!');
        }
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });

        setR6Data(response.data);
        setRefreshList(false);
      }
    }

    SearchFun();
  }, [playerData, page]);

  function handlePage(action) {
    // const count = action === 'back' ? page - 1 : page + 1;
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function searchAgain() {
    setPlayerData([]);
    setR6Data([]);
  }

  async function loadPage() {
    setRefreshList(true);
  }

  useEffect(() => {
    if (friendAdded > 0) {
      const newList = r6Data.filter((value) => {
        return value.id === friendAdded ? null : value;
      });

      setR6Data(newList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friendAdded]);

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
        <Content isAlign={!!playerData.length}>
          {playerData.length !== 0 ? (
            <CardList
              ref={flatListRef}
              data={r6Data}
              refreshing={refreshList}
              onRefresh={loadPage}
              // numColumns={1}
              horizontal
              initialNumToRender={14}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item: data }) => (
                <Card
                  dataR6={data}
                  friendAdded={(value) => setFriendAdded(value)}
                />
              )}
            />
          ) : (
            <SearchTool onChange={setPlayerData} />
          )}
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

      <ResetButton
        enabled={playerData.length !== 0}
        onPress={() => searchAgain()}
      >
        <ResetText>Search again?</ResetText>
      </ResetButton>
    </Background>
  );
}
