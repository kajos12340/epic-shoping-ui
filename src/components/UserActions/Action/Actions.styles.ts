import styled from 'styled-components';

export const Container = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 960px) {
    flex-direction: row;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background-color: #00796b;
  border-radius: 10px;

  & > svg {
    color: white;
    font-size: 2em;
  }
`;
