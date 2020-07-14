import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
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
  background: rgba(222, 222, 255, 0.3);
  width: 100%;
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    // paddingTop: 10,
  },
})`
  height: 80%;
`;

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
  behavior: Platform.OS === 'ios' ? 'padding' : 'padding',
  // keyboardVerticalOffset: 20,
})`
  flex-direction: row;
  margin: 10px 10px;
  justify-content: space-between;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
  textAlignVertical: 'top',
})`
  background: #fff;

  /* height: 50px; */
  width: 85%;
  font-size: 16px;
  border-radius: 10px;
`;

export const SubmitButton = styled(RectButton)`
  /* margin-top: 2px; */
  background: #075e54;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
