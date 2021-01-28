import styled from 'styled-components';
import { Paper as PaperDefault } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(PaperDefault)`
  height: 72vh !important;
`;

export const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Messages = styled.div`
  margin-bottom: 12px;
  grid-template-rows: 1fr auto;
  overflow-y: auto;
`;

export const Input = styled.div`
  display: flex;
  grid-template-rows: 1fr auto;
  
  & > button {
    min-width: 15%;
  }
`;
