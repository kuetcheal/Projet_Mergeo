import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A93D87', 
    },
    secondary: {
      main: '#004080',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <ThemeProvider theme={theme}>
    <App />
 </ThemeProvider>
  
);
reportWebVitals();
