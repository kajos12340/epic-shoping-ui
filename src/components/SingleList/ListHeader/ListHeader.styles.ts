import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: sticky;
  padding: 1em;
  
  display: grid;
  grid-template: "logo date" auto
                 "logo title" 4rem
                 / auto 1fr;
  grid-column-gap: 20px;
`;
