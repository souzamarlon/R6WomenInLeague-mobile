import React, { useState, useEffect, useRef } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Background from '~/components/Background';

import Card from '~/components/Card';

import api from '~/services/api';
import { Container, Content, CardList } from './styles';

export default function Dashboard() {
  const [refreshList, setRefreshList] = useState(false);
  const [r6Data, setR6Data] = useState([]);
  const [friendAdded, setFriendAdded] = useState([]);
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState(false);

  const flatListRef = useRef();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setRefreshList(true);
    }
  }, [isFocused]);

  useEffect(() => {
    async function SearchFun() {
      try {
        const response = await api.get(`users`, {
          params: {
            page,
            per_page: 14,
          },
        });

        if (response.data.length <= 0) {
          return Alert.alert('Hi, We did not find more users!');
        }

        setR6Data(response.data);
        setRefreshList(false);
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      } catch (err) {
        // const { error } = err.response.data;
        // toast.error(`Failure!, ${error}`);
      }
    }

    SearchFun();
  }, [refreshList]);

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
        <Content>
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
        </Content>
      </Container>
    </Background>
  );
}
