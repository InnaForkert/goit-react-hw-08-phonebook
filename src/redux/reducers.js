import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const setFilter = createAction('filter/setFilter');

export const contactsReducer = createReducer(
  // JSON.parse( localStorage.getItem('contactList')) ?? [],
  [],
  {
    [addContact]: (state, action) => {
      state.push(action.payload);
    },
    [removeContact]: (state, action) =>
      state.filter(el => el.name !== action.payload),
  }
);

export const filterReducer = createReducer('', {
  [setFilter]: (state, action) => (state = action),
});
