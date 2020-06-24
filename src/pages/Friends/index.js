import React, { useState, useEffect, useRef } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
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
  MenuText,
  Line,
} from './styles';

export default function Friends() {
  const [r6Data, setR6Data] = useState([]);
  const [page, setPage] = useState(1);
  const [myFriends, setMyFriends] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [refreshList, setRefreshList] = useState(false);
  const [moreData, setMoreData] = useState(false);

  const { id } = useSelector((state) => state.user.profile);

  const flatListRef = useRef();

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
        setIsAdded(false);
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      } catch (err) {
        Alert.alert('Failure!');
      }
    }

    SearchFun();

    setRefreshList(false);
  }, [myFriends, isAdded, refreshList]);

  useEffect(() => {
    async function loadMore() {
      if (moreData === true) {
        if (myFriends) {
          const response = await api.get(`friendship`, {
            params: {
              accepted: true,
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
        }

        const response = await api.get(`friendship`, {
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

  async function loadPage() {
    setPage(1);
    setRefreshList(true);
  }

  console.tron.log('moreData', moreData);
  console.tron.log('page', page);

  return (
    <Background>
      <Container>
        <Menu>
          <MyFriendsButton
            onPress={() => setMyFriends(true) || setPage(1)}
            active={myFriends}
          >
            <MenuText>My Friends</MenuText>
          </MyFriendsButton>
          <Line />
          <FriendRequests
            onPress={() => setMyFriends(false) || setPage(1)}
            active={!myFriends}
          >
            <MenuText>Friend Requests</MenuText>
          </FriendRequests>
        </Menu>
        <Content>
          <CardList
            ref={flatListRef}
            data={r6Data}
            refreshing={refreshList}
            onRefresh={loadPage}
            numColumns={2}
            initialNumToRender={14}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => {
              if (distanceFromEnd > 0) {
                setMoreData(true);
                setPage(page + 1);
              }
            }}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item: data }) => (
              <Card
                friendAdded={(value) => setIsAdded(value)}
                dataR6={data.user_friend === id ? data.user : data.friend}
                allData={data}
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
