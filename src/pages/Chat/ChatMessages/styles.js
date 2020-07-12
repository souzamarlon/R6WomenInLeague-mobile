import styled from 'styled-components/native';

export const Container = styled.View`
  /* margin: auto;
  width: 605px;
  height: 700px;
  background: #fff;
  border-radius: 4px; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    // paddingTop: 10,
  },
})``;

export const Content = styled.View`
  height: 540px;
  background: rgba(222, 222, 255, 0.3);
  overflow: hidden;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* transition: all 0.5s; */
`;

export const MessageField = styled.View`
  border-radius: 20px;
  margin: 7px 10px;
  padding: 5px 10px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 12px;
  padding-top: 7px;
  overflow: visible;
  /* word-break: break-all; */
  /* text-overflow: ellipsis; */
`;
