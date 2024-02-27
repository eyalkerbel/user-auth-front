import React from 'react';
import './App.css';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import RoutesApplication from "./RoutesApplication";

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RoutesApplication/>
    </ThemeProvider>
  );
}

export default App;
