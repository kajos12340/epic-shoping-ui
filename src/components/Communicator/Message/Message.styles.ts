import styled from 'styled-components';

export const Container = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${({ isOwn }) => (isOwn ? 'flex-end' : 'flex-start')};
  
  & > div {
    max-width: 80%;
  }
 
  margin-bottom: 15px;
`;

export const Content = styled.div`
  border: solid 2px #00796b;
  border-radius: 10px;
  display: grid;
  padding: 10px;
  
  grid-template: "icon date" auto
                 "icon text" auto
                 / auto 1fr;
  grid-gap: 10px 10px;
`;

export const OwnContent = styled(Content)`
  grid-template: "date icon" auto
                 "text icon" auto
                 / 1fr auto;
`;

export const Icon = styled.div`
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 50px;
  width: 50px;
  background-color: #00796b;
  border-radius: 100%;
  
  color: white;
  font-size: 1.2em;
  
  text-transform: capitalize;
`;

export const Date = styled.div`
  grid-area: date;
  font-size: 0.85em;
  font-weight: 500;
  color: #676767;
`;

export const Text = styled.div`
  grid-area: text;
`;
