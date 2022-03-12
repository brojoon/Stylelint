import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeLogin {
  id: string;
  password: string;
  status: string;
  token: string;
}
const initialState: typeLogin = { id: '', password: '', status: '', token: '' }; // 초기 상태 정의

export const LoginFetch = createAsyncThunk(
  'user/LoginFetch',
  async (data: any) => {
    const response = await axios.post('http://localhost:3095/login', {
      userId: data.id,
      userPassword: data.password,
    });
    return response?.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(LoginFetch.fulfilled, (state, action) => {
      state.status = 'success';
      state.token = action.payload;
    });
    builder.addCase(LoginFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default loginSlice.reducer; // 리듀서
