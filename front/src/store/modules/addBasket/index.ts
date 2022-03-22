import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { imageConfigDefault } from 'next/dist/server/image-config';
import Router from 'next/router';

interface typeAddBasket {
  status: string;
}

interface AddBasketRequest {
  userId: string;
  product_name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}
const initialState: typeAddBasket = { status: '' }; // 초기 상태 정의

export const AddBasketFetch = createAsyncThunk(
  'user/AddBasketFetch',
  async (data: AddBasketRequest) => {
    const response = await axios.post('/api/user/basket/add', {
      userId: data.userId,
      product_name: data.product_name,
      price: data.price,
      quantity: data.quantity,
      size: data.size,
      color: data.color,
      image: data.image,
    });
    return response?.data;
  },
);

const addBasketSlice = createSlice({
  name: 'addBasket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddBasketFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(AddBasketFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(AddBasketFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default addBasketSlice.reducer; // 리듀서
