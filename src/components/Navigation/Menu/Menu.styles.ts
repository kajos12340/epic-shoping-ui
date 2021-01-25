import styled from 'styled-components';
import ToolbarDefault from '@material-ui/core/Toolbar';
import { AppBar as AppBarDefault } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const Toolbar = styled(ToolbarDefault)`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 960px) {
    &>h6:first-child {
      display: none;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  min-width: 10%;
  justify-content: space-around;
  
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const AppBar = styled(AppBarDefault)`
  @media (max-width: 960px) {
    position: fixed;
    top: unset !important;
    bottom: 0;
  }
`;

export const Spacer = styled(Toolbar)`
  @media (max-width: 960px) {
    display: none !important;
  }
`;
