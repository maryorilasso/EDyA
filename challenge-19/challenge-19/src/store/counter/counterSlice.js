import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  lastOperation: null,
  history: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decreaseValue: (state) => {
      state.value -= 1;
      state.lastOperation = 'decrease';
      state.history.push({
        type: 'decrease',
        amount: 1,
        timestamp: new Date().toISOString()
      });
    },
    addAmount: (state, action) => {
      state.value += action.payload;
      state.lastOperation = 'add';
      state.history.push({
        type: 'add',
        amount: action.payload,
        timestamp: new Date().toISOString()
      });
    }
  }
});

export const { decreaseValue, addAmount } = counterSlice.actions;
export default counterSlice.reducer;