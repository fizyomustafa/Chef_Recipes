import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  line-height: 1;
  span {
    color: white;
    font-family: 'Girassol', sans-serif;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 10px 10px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;
  border-radius: 5px;
  a {
    color: white;
  }
`;

export const HeaderContainer = styled.div``;

export const StyledImage = styled.img`
  width: 30%;
`;