import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
//
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
//
import "../node_modules/normalize.css/normalize.css";
import './styles/main.scss';
//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
