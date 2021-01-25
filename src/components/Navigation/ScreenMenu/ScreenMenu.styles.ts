import styled from 'styled-components';
import FabDefault from '@material-ui/core/Fab';
import ListDefault from '@material-ui/core/List';
import ListItemDefault from '@material-ui/core/ListItem';

export const Fab = styled(FabDefault)`
  position: fixed !important;
  right: 5%;
  bottom: 5%;
`;

export const List = styled(ListDefault)`
  min-width: 300px;
`;

export const ListItem = styled(ListItemDefault)<{ isActive: boolean }>`
  color: ${({ isActive }) => isActive && '#3f51b5 !important'};
  
  & svg {
    color: ${({ isActive }) => isActive && '#3f51b5 !important'};
  }
`;
