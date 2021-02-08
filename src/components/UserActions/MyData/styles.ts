import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.section`
  margin-bottom: 30px;
  display: grid;
  grid-template: "logo login"
                 "logo email"
                 "logo lastLoginDate"
                 "logo registerDate"
                 / 20% calc(80% - 20px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  
  & > div {
    word-break: break-word;
    display: flex;
    flex-direction: row;
  }
  
  @media (max-width: 600px) {
    grid-template: "logo"
                 "login"
                 "email"
                 "lastLoginDate"
                 "registerDate"
                 / 100%;
                 
    & > div {
      word-break: break-word;
      display: flex;
      flex-direction: column;
    }                 
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  & svg {
    font-size: 6em;
  }
`;

const InfoRow = styled.div`
  &>div:first-child {
    color: #00796b;
    font-weight: 500;
    font-size: 95%;
    margin-right: 7px;
  }
`;

export const Login = styled(InfoRow)`
  grid-area: login;
`;

export const Email = styled(InfoRow)`
  grid-area: email;
`;

export const LastLoginDate = styled(InfoRow)`
  grid-area: lastLoginDate;
`;

export const RegisterDate = styled(InfoRow)`
  grid-area: registerDate;
`;
