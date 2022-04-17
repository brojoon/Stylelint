import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Router from 'next/router';

interface typeSingup {
  status: string;
}

interface signupRequest {
  userId: string;
  password: string;
  email: string;
  address: string;
}

export const SignupFetch = createAsyncThunk(
  'user/SignupFetch',
  async (data: signupRequest) => {
    const response = await axios.post('/api/auth/signup', {
      userId: data.userId,
      password: data.password,
      email: data.email,
      address: data.address,
    });
    return response?.data;
  },
);

const initialState: typeSingup = { status: '' };

const signupSlide = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignupFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(SignupFetch.fulfilled, (state, action) => {
      state.status = 'success';
      Router.push('/login');
    });
    builder.addCase(SignupFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default signupSlide.reducer;
