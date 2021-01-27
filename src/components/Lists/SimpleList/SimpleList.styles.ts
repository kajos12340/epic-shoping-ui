import styled from 'styled-components';

export const Container = styled.section`
  padding: 1em;
  
  display: grid;
  grid-template: "logo date" auto
                 "logo title" 4rem
                 "navigation navigation" 3em
                 / auto 1fr;
  grid-column-gap: 20px;
`;

export const Icon = styled.div`
  grid-area: logo;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 75px;
  height: 75px;
  background-color: #00796b;
  border-radius: 10px;
  
  & svg {
    color: white;
    font-size: 2em;
  }
`;

export const Date = styled.div`
  grid-area: date;
  font-size: 0.85em;
  font-weight: 500;
  color: #676767;
`;

export const Title = styled.div`
  grid-area: title;
`;

export const Navigation = styled.div`
  padding-top: 10px;
  grid-area: navigation;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListInactive = styled.span`
  font-weight: 500;
  color: red;
`;
