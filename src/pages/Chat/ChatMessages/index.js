import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  FriendInfo,
  Avatar,
  FriendName,
  FriendLastMessage,
  Content,
  List,
  MessageField,
  Text,
  Form,
  TInput,
  SubmitButton,
} from './styles';

export default function ChatMessages({ route }) {
  const [chatId, setChatId] = useState(0);
  const [allMessages, setAllMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState(false);
  const [newChatId, setNewChatId] = useState(0);
  const [lastMessagesDate, setLastMessagesDate] = useState([]);
  const [friendInfo, setFriendInfo] = useState({});
  const [avatar, setAvatar] = useState({});
  const [status, setStatus] = useState(false);

  const [refreshList, setRefreshList] = useState(false);

  const profile = useSelector((state) => state.user.profile);
  const { friendId } = route.params;

  const flatListRef = useRef();

  const socket = io('http://192.168.25.32:3333', {
    query: { user: profile.id },
  });

  socket.on('sendMessage', (data) => {
    if (data.user === friendId) {
      setNewChatId(newChatId <= 0 ? data.chatId : newChatId);
      setReceivedMessages(data);
      setStatus(data.status);
    }
  });

  socket.on('status', (data) => {
    if (data.userId === friendId) {
      setStatus(data.status);
    }
  });

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await api.get(`/chat/${friendId}`);

        if (response.data) {
          setFriendInfo(response.data.userInfo);
          setChatId(response.data.messagesReceived._id);
          setAllMessages(response.data.messagesReceived.messages);
          setStatus(response.data.status);
          setLastMessagesDate(
            format(
              parseISO(response.data.messagesReceived.updatedAt),
              "MMMM d',' yyyy"
            )
          );

          setRefreshList(false);
        }
      } catch (err) {
        // hasMessages(false);

        setAllMessages([]);
        setChatId(0);
        setRefreshList(false);
      }
    }

    getMessages();
  }, [friendId, refreshList]);

  useEffect(() => {
    async function getPlayerData() {
      if (friendInfo.uplay) {
        const { data } = await api.get('/stats', {
          params: {
            username: friendInfo.uplay,
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
  }, [friendInfo, friendId]);

  useEffect(() => {
    if (!chatId) {
      setChatId(newChatId);
    }
    if (receivedMessages) {
      setAllMessages([...allMessages, receivedMessages]);
    }
  }, [receivedMessages, newChatId]);

  async function handleSubmit() {
    if (allMessages.length <= 0) {
      const response = await api.post(`/chat/${friendId}`, {
        message: newMessage,
      });
      // setChatId(_id);
      setChatId(response.data._id);
      setAllMessages([
        ...allMessages,
        { user: profile.id, message: newMessage },
      ]);
      setNewMessage('');
    }

    const response = await api.put(`/chat/${chatId}`, { message: newMessage });

    // New message id
    const { _id } = response.data;

    setAllMessages([
      ...allMessages,
      { _id, user: profile.id, message: newMessage },
    ]);
    setNewMessage('');
  }

  async function loadPage() {
    setRefreshList(true);
  }

  return (
    <Container>
      <FriendInfo>
        <Avatar
          source={{
            uri: avatar.avatar_url
              ? avatar.avatar_url
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />

        <FriendName>{friendInfo.name}</FriendName>
        {status ? (
          <Icon
            name="radio-button-checked"
            size={15}
            color="#29F907"
            style={{ marginTop: 3 }}
          />
        ) : (
          <Icon
            name="radio-button-checked"
            size={15}
            color="#f90707"
            style={{ marginTop: 3 }}
          />
        )}

        <FriendLastMessage>{`Last message: ${lastMessagesDate}`}</FriendLastMessage>
      </FriendInfo>
      <Content>
        <List
          ref={flatListRef}
          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
          data={allMessages}
          refreshing={refreshList}
          // initialNumToRender={14}
          onRefresh={loadPage}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item: data }) => (
            <MessageField backgroundColor={data.user === friendId}>
              <Text textAlign={data.user === friendId}>{data.message}</Text>
            </MessageField>
          )}
        />
      </Content>

      <Form>
        <TInput
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Hi!"
          returnKeyType="next"
          multiline
          // numberOfLines={50}
          maxLength={240}
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <SubmitButton onPress={handleSubmit}>
          <Icon name="send" size={30} color="#fff" style={{ marginTop: 0 }} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
