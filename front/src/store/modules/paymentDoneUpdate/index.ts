import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typePaymentDoneUpdate {
  status: string;
}

const initialState: typePaymentDoneUpdate = { status: '' }; // 초기 상태 정의

export const PaymentDoneUpdateFetch = createAsyncThunk(
  'PaymentDoneUpdateFetch',
  async (data: any) => {
    const response = await axios.post('/api/payment/save/done', data);
    return response?.data;
  },
);

const PaymentDoneUpdateSlice = createSlice({
  name: 'PaymentDoneUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PaymentDoneUpdateFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentDoneUpdateFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentDoneUpdateFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default PaymentDoneUpdateSlice.reducer; // 리듀서
