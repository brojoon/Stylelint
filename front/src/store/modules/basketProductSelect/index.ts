import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeBasketCounter {
  status: string;
}

interface BasketCounterRequest {
  id: number;
  quantity: number;
}
const initialState: typeBasketCounter = { status: '' }; // 초기 상태 정의

export const BasketCounterFetch = createAsyncThunk(
  'user/BasketCounterFetch',
  async (data: BasketCounterRequest) => {
    const response = await axios.post('/api/basket/counter', {
      id: data.id,
      quantity: data.quantity,
    });
    return 'success';
  },
);

const BasketCounterSlice = createSlice({
  name: 'BasketCounter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BasketCounterFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(BasketCounterFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(BasketCounterFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default BasketCounterSlice.reducer; // 리듀서
