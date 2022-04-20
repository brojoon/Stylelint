import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeUserInfoUpdate {
  status: string;
}

const initialState: typeUserInfoUpdate = { status: '' }; // 초기 상태 정의

interface userInfoUpdateRequest {
  userId: string;
  password: string;
  address: string | null;
  email: string;
  phone_number: string;
  nickname: string;
}

export const UserInfoUpdateFetch = createAsyncThunk(
  'user/UserInfoUpdateFetch',
  async (data: any) => {
    const response = await axios.post('/api/user/profile', data);
    return response?.data;
  },
);

const UserInfoUpdateSlice = createSlice({
  name: 'UserInfoUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserInfoUpdateFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(UserInfoUpdateFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(UserInfoUpdateFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default UserInfoUpdateSlice.reducer; // 리듀서
