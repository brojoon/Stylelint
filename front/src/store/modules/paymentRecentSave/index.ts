import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typePaymentRecemntSave {
  status: string;
}

const initialState: typePaymentRecemntSave = { status: '' }; // 초기 상태 정의

export const PaymentRecentSaveFetch = createAsyncThunk(
  'PaymentRecentSaveFetch',
  async (data: any) => {
    const response = await axios.post('/api/user/payment/recent', data);
    return response?.data;
  },
);

const PaymentRecentSaveSlice = createSlice({
  name: 'PaymentRecentSave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PaymentRecentSaveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentRecentSaveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentRecentSaveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default PaymentRecentSaveSlice.reducer; // 리듀서
