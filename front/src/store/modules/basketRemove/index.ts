import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { imageConfigDefault } from 'next/dist/server/image-config';
import Router from 'next/router';

interface typeBasketRemove {
  status: string;
}

const initialState: typeBasketRemove = { status: '' }; // 초기 상태 정의

export const BasketRemoveFetch = createAsyncThunk(
  'user/BasketRemoveFetch',
  async (data: any) => {
    const response = await axios.post('/api/basket/remove', data);
    return response?.data;
  },
);

const BasketRemoveSlice = createSlice({
  name: 'BasketRemove',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BasketRemoveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(BasketRemoveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(BasketRemoveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default BasketRemoveSlice.reducer; // 리듀서
