import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto;
  width: 80%;
  /* height: 749px; */
  border: 0;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  width: 90%;
  height: 410px;
  display: flex;
  justify-content: ${(props) => (props.isAlign ? 'flex-start' : 'center')};
  /* align-items: center; */
  background: rgba(27, 25, 28, 0.74);
  border-radius: 8px;
`;

export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // paddingTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
  },
})``;
