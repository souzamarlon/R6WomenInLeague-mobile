import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: auto;
  width: 85%;
  /* height: 80vh; */
  border: 0;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  width: 99%;
  display: flex;
  border-radius: 8px;
  height: 490px;
  background: rgba(27, 25, 28, 0.74);
  /* justify-content: center; */
  align-items: center;
  /* margin: 30px auto; */
`;

export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    // paddingTop: 10,
    paddingLeft: 10,
  },
})``;

export const ButtonSwitchPages = styled(RectButton)`
  background: transparent;
  color: #fff;
  border: 0;
`;
