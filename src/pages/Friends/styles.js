import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: auto;
  width: 80%;
  /* height: 80vh; */
  border: 0;
  align-items: center;
  /* flex-direction: row; */
  justify-content: center;
`;

export const Menu = styled.View`
  flex-direction: row;
`;

export const MyFriendsButton = styled(RectButton)`
  width: 100px;
  height: 20px;
  background-color: #000;
`;

export const FriendRequests = styled(RectButton)`
  width: 100px;
  height: 20px;
  background-color: #fff;
`;

export const Content = styled.View`
  width: 90%;
  display: flex;
  border-radius: 8px;
  height: 430px;
  background: rgba(27, 25, 28, 0.74);
  /* justify-content: center; */
  align-items: center;
  /* margin: 30px auto; */
`;
export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // paddingTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
  },
})``;

export const ButtonSwitchPages = styled(RectButton)`
  background: transparent;
  color: #fff;
  border: 0;
`;
