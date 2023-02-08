import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from './auth/slice';

import { combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer)
});

export const store = configureStore({
  reducer: rootReducer,
   middleware,
    devTools: process.env.NODE_ENV === 'development',

});

export const persistor = persistStore(store);



//=============== Before 2 ========================
// import { configureStore } from "@reduxjs/toolkit";
// import { rootContacts, rootFilters } from "./contacts/reducer";

// export const store = configureStore({
//     reducer: {
//         contacts: rootContacts,
//         filters: rootFilters
//   }
// });

//=============== Before ========================
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./contacts/reducer";

// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);