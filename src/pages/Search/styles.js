import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 5px auto;
  width: 100%;
  /* height: 749px; */
  border: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.View`
  width: 99%;
  height: 95%;
  max-height: 690px;
  display: flex;
  justify-content: ${(props) => (props.isAlign ? 'flex-start' : 'center')};
  align-items: center;
  background: rgba(27, 25, 28, 0.74);
  border-radius: 8px;
`;

export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
  },
})``;

export const ButtonSwitchPages = styled(RectButton)`
  background: transparent;
  color: #fff;
  border: 0;
`;

export const ResetButton = styled(RectButton)`
  /* background: rgba(227, 23, 60, 0.46); */
  border: 1px solid #dddddd;
  width: 120px;
  height: 20px;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const AlignSwitchPages = styled.View`
  flex-direction: row;
  /* margin-bottom: 15px; */
`;

export const ResetText = styled.Text`
  color: #fff;
  font-size: 14px;
  /* width: 100%; */
  margin: auto;
  height: 30px;
  /* margin-bottom: 10px; */
`;
