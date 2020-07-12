import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 340px;
  height: 65px;
  margin: 2px auto;
  border-radius: 4px;
  background: #222;
  /* box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.4); */
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const Info = styled.View`
  width: 110px;
  /* background: #fff; */
  /* justify-content: center; */
  align-items: center;
  /* .online {
    color: #29f907;
  }
  .offline {
    color: #f90707;
  } */
`;
export const UserName = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${(props) => (props.status ? '#29f907' : ' #f90707')};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 55px;
  border-radius: 100px;
  margin-top: 4px;
  margin-left: 20px;
`;
