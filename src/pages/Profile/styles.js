import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';

import Input from '~/components/Input';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  // justifyContent: 'center',
  // alignItems: 'center',
  contentContainerStyle: {
    // paddingTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
  },
})`
  display: flex;
  align-self: center;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.6);
  width: 80%;
  height: 500px;
  margin: auto;
  border: 0;
  border-radius: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const PickerFields = styled.View`
  padding: 0 15px;
  background-color: rgba(255, 25, 92, 0.5);
  margin-bottom: 10px;
  height: 50px;
  border-radius: 4px;
  font-size: 15px;
  flex-direction: row;
  align-items: center;
`;

export const PickerTexts = styled.Text`
  font-size: 12px;
  color: #fff;
`;
