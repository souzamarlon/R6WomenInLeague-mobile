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
  height: 98%;
  max-height: 740px;
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

export const ResetButton = styled(RectButton)`
  /* background: rgba(227, 23, 60, 0.46); */
  border: 1px solid #dddddd;

  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ResetText = styled.Text`
  color: #fff;
  font-size: 14px;
  /* width: 100%; */
  margin: auto;
  height: 30px;
  /* margin-bottom: 10px; */
`;
