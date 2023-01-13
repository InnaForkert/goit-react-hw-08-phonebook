import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(el => el.name !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
