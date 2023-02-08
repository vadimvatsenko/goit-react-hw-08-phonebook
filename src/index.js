import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
//
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
//
import "../node_modules/normalize.css/normalize.css";
import './index.css'

import { ThemeProvider } from '@mui/material';
import { theme } from "./theme/theme";

//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);



