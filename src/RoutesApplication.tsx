import React from 'react';
import './App.css';
import UserForm from "./compoents/UserForm";
import UsersList from "./compoents/UserList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import NavigationBar from "./NavigationBar";

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

function RoutesApplication(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/users" element={<UsersList/>}/>
          <Route path="/" element={<UserForm/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default RoutesApplication;
