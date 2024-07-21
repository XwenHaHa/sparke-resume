import { createSlice } from '@reduxjs/toolkit';

export interface GlobalState {
  appName: string;
}

const initialState: GlobalState = {
  appName: '简历应用平台',
};

export const globalModel = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export default globalModel.reducer;
