import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { paymentBasketRequest, paymentSaveRequest } from '@typings/IRequest';
import axios from 'axios';

interface typePaymentSave {
  status: string;
}

const initialState: typePaymentSave = { status: '' }; // 초기 상태 정의

export const PaymentSaveFetch = createAsyncThunk(
  'PaymentSaveFetch',
  async (data: paymentSaveRequest[] | paymentBasketRequest) => {
    const response = await axios.post('/api/payment/save', data);
    return response?.data;
  },
);

const PaymentSaveSlice = createSlice({
  name: 'PaymentSave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PaymentSaveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentSaveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentSaveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default PaymentSaveSlice.reducer; // 리듀서
