import styled from 'styled-components';

export const Container = styled.section`
  padding: 1em;
  
  display: grid;
  grid-template: "logo date" auto
                 "logo title" 50px
                 "navigation navigation" auto
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
  justify-content: space-between;
  align-items: center;
`;

export const ListState = styled.span<{ isActive: boolean }>`
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? 'green' : 'red')}
`;
