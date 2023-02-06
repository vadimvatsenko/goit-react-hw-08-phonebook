import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import {contactsReducer} from './contacts/contactsSlice'
import { authReducer } from './auth/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


// import { configureStore } from "@reduxjs/toolkit";

// import storage from 'redux-persist/lib/storage';
// import { filterReducer } from "./contacts/filterSlice";
// import { contactsReducer } from "./contacts/contactsSlice";
// import { authReducer } from "./auth/slice";

// import { combineReducers } from "@reduxjs/toolkit";

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: persistReducer(authPersistConfig, authReducer),
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

