import styled from 'styled-components/native';

export const Container = styled.View`
  /* margin: auto;
  width: 605px;
  height: 700px;
  background: #fff;
  border-radius: 4px; */
`;

export const FriendInfo = styled.View`
  height: 65px;
  width: 100%;
  /* justify-content: center; */
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #222;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-top: 4px;
  margin-left: 30px;
`;

export const FriendName = styled.Text`
  margin-left: 10px;
  margin-right: 5px;
  font-size: 15px;
  color: #fff;
`;
export const FriendLastMessage = styled.Text`
  margin-left: 20px;
  font-size: 12px;
  color: #fff;
`;

export const Content = styled.View`
  height: 540px;
  background: rgba(222, 222, 255, 0.3);
  overflow: hidden;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* transition: all 0.5s; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    // paddingTop: 10,
  },
})``;

export const MessageField = styled.View`
  background: ${(props) => (props.backgroundColor ? '#FFF' : '#dcf8c6')};
  border-radius: 20px;
  margin: 7px 10px;
  padding: 5px 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

export const Text = styled.Text`
  text-align: ${(props) => (props.textAlign ? 'left' : 'right')};
  color: #000;
  font-size: 12px;
  padding-top: 7px;
  overflow: visible;
  /* word-break: break-all; */
  /* text-overflow: ellipsis; */
`;
