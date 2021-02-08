import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template: "name quantity unit buttons" auto / 50% 20% 20% 10%;
  grid-column-gap: 5px;
  margin: 15px 0;
  
  & > div {
    height: 100%;
    width: 100%;
    align-self: start;
    
    & > div {
      margin: 0 !important; 
    }
  }
  
  @media (max-width: 960px) {
    grid-template: "name quantity unit buttons" auto / 50% 20% 20% 10%;
    grid-template: "name name buttons" auto
                   "quantity unit buttons" auto
                    / 40% 40% 20%;                
    grid-gap: 15px 5px;
  }
`;

export const Name = styled.div`
  grid-area: name;
`;

export const Quantity = styled.div`
  grid-area: quantity;
`;

export const Unit = styled.div`
  grid-area: unit;
`;

export const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  & > button {
    padding: 3px 0 0 0;
  }
  
  & svg {
    font-size: 2em;
  }
  
  @media (max-width: 960px) {
    align-items: center; 
  }
`;
