import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeBasketAdd {
  status: string;
}

interface BasketAddRequest {
  userId: string;
  product_name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

const initialState: typeBasketAdd = { status: '' }; // 초기 상태 정의

export const BasketAddFetch = createAsyncThunk(
  'user/BasketAddFetch',
  async (data: BasketAddRequest[]) => {
    const response = await axios.post(
      '/api/basket/add',

      data,
    );
    return response?.data;
  },
);

const BasketAddSlice = createSlice({
  name: 'BasketAdd',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BasketAddFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(BasketAddFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(BasketAddFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default BasketAddSlice.reducer; // 리듀서
