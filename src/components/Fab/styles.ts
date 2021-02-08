import styled from 'styled-components';
import FabDefault from '@material-ui/core/Fab';

// eslint-disable-next-line import/prefer-default-export
export const PositionedFab = styled(FabDefault)`
  position: fixed !important;
  bottom: 5%;
  right: 5%;
  
  @media (max-width: 960px) {
    bottom: 10%;
    right: 3%;
  }
`;
