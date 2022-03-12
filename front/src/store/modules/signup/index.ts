import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeSingup {
  status: string;
}

export const SignupFetch = createAsyncThunk(
  'user/SignupFetch',
  async (data: any) => {
    const response = await axios.post('http://localhost:3095/signup', {
      userId: data.id,
      userPassword: data.password,
      userEmail: data.email,
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
    });
    builder.addCase(SignupFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default signupSlide.reducer;
