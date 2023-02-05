import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
//
import { Provider } from "react-redux";
import { store } from "./redux/store";
//
import "../node_modules/normalize.css/normalize.css";
import './index.css'

import { ThemeProvider } from '@mui/material';
import { theme } from "./theme/theme";

//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



