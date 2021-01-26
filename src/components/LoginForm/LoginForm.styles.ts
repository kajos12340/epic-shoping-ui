import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AvatarDefault from '@material-ui/core/Avatar';

export const RegisterLinkContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;

export const FormContainer = styled(Grid)`
  height: 100%;
`;

export const Avatar = styled(AvatarDefault)`
  width: 60px !important;
  height: 60px !important;
  background: #00796b !important;
`;
