import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 15px auto;
  width: 100%;
  /* height: 80vh; */
  border: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Menu = styled.View`
  flex-direction: row;
  background-color: #000;
  opacity: 0.2;
  border-radius: 2px;
  border: 0;
`;

export const MyFriendsButton = styled(RectButton)`
  width: 100px;
  height: 20px;
  background-color: ${(props) => (props.active ? '#FFF' : 'null')};
  border-radius: 2px;
  border: 0;
`;

export const Line = styled.View`
  width: 2px;
  height: 20px;
  background-color: #fff;
  opacity: 0.6;
  border-radius: 2px;
  border: 0;
`;

export const FriendRequests = styled(RectButton)`
  width: 110px;
  height: 20px;
  /* margin-left: 15px; */
  background-color: ${(props) => (props.active ? '#FFF' : 'null')};
  border-radius: 2px;
  border: 0;
`;

export const MenuText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const Content = styled.View`
  width: 99%;
  display: flex;
  border-radius: 8px;
  height: 100%;
  max-height: 740px;
  background: rgba(27, 25, 28, 0.74);
  /* justify-content: center; */
  align-items: center;
  /* margin: 30px auto; */
`;
export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // paddingLeft: 10,
  },
})``;
