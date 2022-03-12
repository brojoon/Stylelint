import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const LogoutFetch = createAsyncThunk('user/LogoutFetch', async () => {
  const response = await axios.get('http://localhost:3095/logout');
  return response?.data;
});

interface typeLogout {
  status: string;
}

const initialState: typeLogout = { status: '' };

const logoutSlide = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LogoutFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(LogoutFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(LogoutFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default logoutSlide.reducer; // 리듀서
