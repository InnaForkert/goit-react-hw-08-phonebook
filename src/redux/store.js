import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
