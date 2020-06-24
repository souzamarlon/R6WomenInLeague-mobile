import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto;
  width: 100%;
  /* height: 80vh; */
  border: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    // paddingTop: 10,
  },
})``;
