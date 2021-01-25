import styled from 'styled-components';

export const MobileMenuContainer = styled.nav`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

export const ScreenMenuContainer = styled.nav`
  display: none;
  @media (min-width: 961px) {
    display: block;
  }
`;
