import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 260px;
  height: 460px;
  background: rgba(10, 10, 10, 0.5);
  /* box-sizing: border-box; */
  box-shadow: 5px 5px 8px rgb(10, 10, 10);
  border-radius: 9px;
  margin: 10px 10px;
  border: 0;
  /* transition: background 0.3s; */
  align-items: center;
  /* -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s; */
  /* transition: all 0.3s; */
`;

export const ImageArea = styled.View`
  position: relative;
`;

export const Avatar = styled.Image`
  width: 170px;
  height: 175px;
  border-radius: 100px;
  margin-top: 4px;
`;

export const R6Name = styled.Text`
  padding-top: 5px;
  color: #fff;
  font-size: 14px;
`;

export const R6Rank = styled.Text`
  padding-top: 5px;
  color: #fff;
  font-size: 14px;
`;

export const R6PlayStyle = styled.Text`
  padding-top: 5px;
  color: rgba(250, 248, 248, 0.56);
  font-size: 12px;
`;
export const R6Info = styled.Text`
  padding-top: 5px;
  color: rgba(250, 248, 248, 0.56);
  font-size: 12px;
`;

export const R6Ranked = styled.Text`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin: 5px auto;
  padding-top: 2px;
  color: #fff;
  width: 81px;
  height: 16.34px;
  opacity: ${(props) => (props.status_ranked ? 1 : 0.1)};
  background-color: ${(props) =>
    props.status_ranked ? 'rgba(78, 253, 34, 0.42)' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const R6Comp = styled.Text`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin: 5px auto;
  padding-top: 2px;
  width: 95px;
  height: 16.34px;
  color: #fff;
  opacity: ${(props) => (props.status_competition ? 1 : 0.1)};
  background-color: ${(props) =>
    props.status_competition
      ? 'rgba(78, 253, 34, 0.42)'
      : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const R6Times = styled.Text`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin: 5px auto;
  padding-top: 2px;
  width: 81px;
  height: 16.34px;
  color: #fff;
  background-color: rgba(24, 29, 163, 0.42);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const R6Region = styled.Text`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin: 5px auto;
  /* padding-top: 2px; */
  width: 81px;
  height: 16.34px;
  color: #fff;
  background-color: rgba(255, 25, 34, 0.33);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
