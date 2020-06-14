import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: auto;
  width: 80%;
  /* height: 80vh; */
  border: 0;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  border-radius: 8px;
  height: 390px;
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
