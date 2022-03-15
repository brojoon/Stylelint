import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Router from 'next/router';

interface typeLogin {
  status: string;
  token: string;
}

interface loginRequest {
  userId: string;
  password: string;
}
const initialState: typeLogin = { status: '', token: '' }; // 초기 상태 정의

export const LoginFetch = createAsyncThunk(
  'user/LoginFetch',
  async (data: loginRequest) => {
    const response = await axios.post('/api/auth/login', {
      userId: data.userId,
      password: data.password,
    });
    return response?.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    removeToken: (state) => {
      state.token = '';
      Router.push('/login');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(LoginFetch.fulfilled, (state, action) => {
      state.status = 'success';
      state.token = action.payload;
      console.log(state.token);

      Router.push('/');
    });
    builder.addCase(LoginFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export const { removeToken } = loginSlice.actions;
export default loginSlice.reducer; // 리듀서
