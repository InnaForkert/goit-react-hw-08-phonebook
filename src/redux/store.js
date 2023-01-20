import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { userReducer } from './user/userSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['contacts/fetch/fulfilled'],
        ignoredPaths: ['contacts'],
      },
    }),
});
