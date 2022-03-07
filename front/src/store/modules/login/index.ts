import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  password: string;
}
const initialState: User = { id: '', password: '' }; // 초기 상태 정의
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  // },
});
// export const { increment, decrement } = counterSlice.actions;
export default loginSlice.reducer; // 리듀서
