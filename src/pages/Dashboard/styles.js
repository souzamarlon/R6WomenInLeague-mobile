import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto;
  width: 80%;
  /* height: 80vh; */
  border: 0;
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
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    // paddingTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
  },
})``;
