import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createUser = createAsyncThunk(
  'user/create',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/logout', user);
      token.unset();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.user.token;
      if (persistedToken) {
        token.set(persistedToken);
        const { data } = await axios.get('users/current');
        console.log(data);
        return data;
      }
      return thunkAPI.rejectWithValue('Please login to proceed');
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      console.log('unknown error');
    }
  }
);
