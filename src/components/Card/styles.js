import styled from 'styled-components/native';

export const Container = styled.View`
  width: 195px;
  height: 387px;
  background: rgba(10, 10, 10, 0.5);
  /* box-sizing: border-box; */
  box-shadow: 5px 5px 8px rgb(10, 10, 10);
  border-radius: 9px;
  margin: 10px 5px;
  border: 0;
  /* transition: background 0.3s; */
  align-items: center;
  /* -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s; */
  /* transition: all 0.3s; */
`;
export const Avatar = styled.Image`
  position: relative;
  img {
    width: 170px;
    height: 175px;
    border-radius: 100%;
  }
  img.americaRank {
    position: absolute;
    margin-left: 120px;
    width: 70px;
    height: 70px;
  }
`;
