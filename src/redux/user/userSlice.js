import { createSlice } from '@reduxjs/toolkit';
import { createUser } from 'redux/utils/createUser';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: null,
    userData: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userData = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const { setFilter } = filterSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = store => store.user;
