import React, { useState, useEffect, useRef } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import Card from '~/components/Card';
import SearchTool from '~/components/SearchTool';
import Background from '~/components/Background';

import api from '~/services/api';

import { Container, Content, CardList, ResetButton, ResetText } from './styles';

export default function Search() {
  const [playerData, setPlayerData] = useState([]);
  const [r6Data, setR6Data] = useState([]);
  const [page, setPage] = useState(1);
  const [friendAdded, setFriendAdded] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [moreData, setMoreData] = useState(false);

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
  }, [playerData, refreshList]);

  function searchAgain() {
    setPage(1);
    setPlayerData([]);
    setR6Data([]);
  }

  async function loadPage() {
    setPage(1);
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

  useEffect(() => {
    async function loadMore() {
      if (moreData === true) {
        const response = await api.get(`users`, {
          params: {
            page,
            per_page: 14,
          },
        });

        if (response.data.length <= 0) {
          setPage(page - 1);
          setMoreData(false);
          // return Alert.alert('Hi, We did not find more users!');
        }

        setR6Data((oldData) => [...oldData, ...response.data]);
        setRefreshList(false);
        setMoreData(false);
        // flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      }
    }

    loadMore();
  }, [moreData]);

  return (
    <Background>
      <Container>
        <Content isAlign={!!playerData.length}>
          {playerData.length !== 0 ? (
            <CardList
              ref={flatListRef}
              data={r6Data}
              refreshing={refreshList}
              onRefresh={loadPage}
              // horizontal
              numColumns={2}
              initialNumToRender={14}
              onEndReachedThreshold={0.1}
              onEndReached={({ distanceFromEnd }) => {
                if (distanceFromEnd > 0) {
                  setMoreData(true);
                  setPage(page + 1);
                }
              }}
              // scrollEventThrottle={400}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item: data }) => (
                <Card
                  dataR6={data}
                  friendAdded={(value) => setFriendAdded(value)}
                />
              )}
              ListFooterComponent={
                <>
                  {moreData ? (
                    <ActivityIndicator size="small" color="#FFF" />
                  ) : null}
                </>
              }
            />
          ) : (
            <SearchTool onChange={setPlayerData} />
          )}

          {playerData.length !== 0 ? (
            <ResetButton
              enabled={playerData.length !== 0}
              onPress={() => searchAgain()}
            >
              <ResetText>Search again?</ResetText>
            </ResetButton>
          ) : null}
        </Content>
      </Container>
    </Background>
  );
}
