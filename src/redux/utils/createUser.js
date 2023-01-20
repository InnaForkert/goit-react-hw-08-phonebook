import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk(
  'user/create',
  async (user, thunkAPI) => {
    try {
      console.log(user);
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        user
      );
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
