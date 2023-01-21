import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async thunkAPI => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contact.id}`);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
