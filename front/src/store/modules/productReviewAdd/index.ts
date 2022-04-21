import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeProductReviewAdd {
  status: string;
}

interface ProductReviewAddRequest {
  product_code: string | string[];
  userId: string;
  nickname: string;
  review_text: string;
  score: number;
}

const initialState: typeProductReviewAdd = { status: '' }; // 초기 상태 정의

export const ProductReviewAddFetch = createAsyncThunk(
  'product/ReviewAddFetch',
  async (data: ProductReviewAddRequest) => {
    const response = await axios.post('/api/product/review/add', data);
    return response?.data;
  },
);

const ProductReviewAddSlice = createSlice({
  name: 'ProductReviewAdd',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductReviewAddFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(ProductReviewAddFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(ProductReviewAddFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default ProductReviewAddSlice.reducer; // 리듀서
