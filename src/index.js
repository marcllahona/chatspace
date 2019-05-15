import React from 'react';
import { hydrate, render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Apollo from './Apollo';
import { AppProvider } from "./AppContext";
import theme from './lib/theme';
import './styles/index.css';


const rootElement = document.getElementById('root');
const renderOrHydrate = rootElement.hasChildNodes() ? hydrate : render;

renderOrHydrate(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <AppProvider>
          <Apollo>
            <App />
          </Apollo>
        </AppProvider>
    </BrowserRouter>
  </ThemeProvider>,
  rootElement
);
