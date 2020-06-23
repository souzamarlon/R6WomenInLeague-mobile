import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  max-height: 477.87px;
  background: rgba(172, 28, 80, 0.3);
  border: 1px solid rgba(255, 50, 222, 0.2);
  border-radius: 8px;
  /* padding-top: 10px; */
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  /* letter-spacing: 0.2em; */
  color: #fff;
  text-align: center;
`;
export const OptionsTitle = styled.Text`
  padding-top: 20px;
  font-size: 11px;
  line-height: 15px;
  /* letter-spacing: 0.3em; */
  color: #ffffff;
  margin: 0 20px;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SelectLayout = styled.View`
  background-color: rgba(255, 25, 92, 0.5);

  height: 34px;
  border-radius: 4px;
  font-size: 11px;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 50px;
  width: 120px;
  height: 36px;
  background: rgba(5, 250, 88, 0.4);
  border: 0;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
