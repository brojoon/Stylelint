import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface typeBasketProductsSelectArr {
  productCardArr: number[];
}

const initialState: typeBasketProductsSelectArr = {
  productCardArr: new Array(1).fill(0),
}; // 초기 상태 정의

const BasketProductsSelectArrSlice = createSlice({
  name: 'BasketProductsSelectArr',
  initialState,
  reducers: {
    refetchProductsArr(state, action: PayloadAction<number[]>) {
      state.productCardArr = action.payload;
    },
  },
});

export const { refetchProductsArr } = BasketProductsSelectArrSlice.actions;

export default BasketProductsSelectArrSlice.reducer; // 리듀서
