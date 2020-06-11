import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  width: 80%;
  /* height: 80vh; */
  border: 0;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  border-radius: 8px;
  height: 100%;
  background: rgba(27, 25, 28, 0.74);
  justify-content: center;
`;

export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // paddingTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
  },
})``;
