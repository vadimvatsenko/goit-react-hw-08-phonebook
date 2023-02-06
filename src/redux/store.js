import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/slice";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

