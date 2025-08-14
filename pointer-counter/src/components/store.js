import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incrementOdd: (state) => {
      if (state.value % 2 !== 0) state.value += 1;
    },
    incrementEven: (state) => {
      if (state.value % 2 === 0) state.value += 1;
    },
    decrementOdd: (state) => {
      if (state.value % 2 !== 0) state.value -= 1;
    },
    decrementEven: (state) => {
      if (state.value % 2 === 0) state.value -= 1;
    },
    autoIncrement: (state) => {
      state.value += 1;
    },
  },
});

export const {
  incrementOdd,
  incrementEven,
  decrementOdd,
  decrementEven,
  autoIncrement,
} = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
