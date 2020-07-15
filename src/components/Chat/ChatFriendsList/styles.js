import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 65px;
  margin: 1px auto;
  border-radius: 0;
  background: #222;
  /* box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.4); */
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const Info = styled.View`
  width: 140px;
  align-items: center;
`;
export const UserName = styled.Text`
  font-size: 17px;
  color: #fff;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${(props) => (props.status ? '#29f907' : ' #f90707')};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-top: 4px;
  margin-left: 20px;
`;
