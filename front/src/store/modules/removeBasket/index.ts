import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { imageConfigDefault } from 'next/dist/server/image-config';
import Router from 'next/router';

interface typeRemoveBasket {
  status: string;
}

const initialState: typeRemoveBasket = { status: '' }; // 초기 상태 정의

export const RemoveBasketFetch = createAsyncThunk(
  'user/removeBasketFetch',
  async (id: number) => {
    console.log(id);
    const response = await axios.post('/api/basket/remove', { id: id });
    return response?.data;
  },
);

const RemoveBasketSlice = createSlice({
  name: 'removeBasket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RemoveBasketFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(RemoveBasketFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(RemoveBasketFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default RemoveBasketSlice.reducer; // 리듀서
