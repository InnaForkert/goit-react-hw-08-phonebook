import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (thunkAPI) => {
    try {
      const response = await axios.get('https://63caac4ad0ab64be2b57f937.mockapi.io/contacts');
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log("unknown error");
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {

    try {
      const response = await axios.post('https://63caac4ad0ab64be2b57f937.mockapi.io/contacts', contact);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log("unknown error");
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete(`https://63caac4ad0ab64be2b57f937.mockapi.io/contacts/${contact.id}`);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log("unknown error");
    }
  }
)