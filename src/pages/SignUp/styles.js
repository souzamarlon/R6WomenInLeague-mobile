import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'paddding',
})`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 0 30px;
  background: #000;
  opacity: 0.6;
  width: 80%;
  height: 80%;
  margin: auto;
  border: 0;
  border-radius: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
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

export const RegionField = styled.View`
  padding: 0 15px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  height: 50px;
  border-radius: 4px;
  font-size: 15px;
  flex-direction: row;
  align-items: center;
`;
