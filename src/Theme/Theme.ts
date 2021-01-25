import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#26a69a',
    },
    error: {
      main: '#e53935',
    },
  },
});

export default theme;
