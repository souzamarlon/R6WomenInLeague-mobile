import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  /* flex: 1; */
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
  /* height: 540px; */
  height: 75%;
  background: rgba(222, 222, 255, 0.3);
  overflow: hidden;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* transition: all 0.5s; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
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

export const Form = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  keyboardVerticalOffset: 100,
})`
  display: flex;
  flex-direction: row;
  /* margin-top: 20px; */
  margin: 20px 20px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
  textAlignVertical: 'top',
})`
  /* flex: 1; */
  background: #fff;
  /* padding: 20px 20px; */
  height: 50px;
  width: 250px;
  font-size: 16px;
  border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 2px;
  /* background: #7d40e7; */
`;
