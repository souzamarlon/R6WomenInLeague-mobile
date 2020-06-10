import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  justify-content: center;
  align-self: center;

  margin: auto;
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'paddding',
})`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.6);
  width: 80%;
  height: 400px;
  border: 0;
  border-radius: 10px;
`;

export const AppTitle = styled.Text`
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Title = styled.Text`
  display: flex;
  flex-direction: row;
  text-align: left;
  color: #fff;
  width: 100%;
  padding-bottom: 5px;
  font-size: 21px;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;
