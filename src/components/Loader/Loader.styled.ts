import styled from 'styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
    
  z-index: 1101;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const Icon = styled(FastfoodIcon)`
  font-size: 80px;
  animation: rotateAndScale 1.5s ease-out infinite;
  
  @keyframes rotateAndScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
