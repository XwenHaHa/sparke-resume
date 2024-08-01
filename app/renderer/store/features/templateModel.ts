import { createSlice } from '@reduxjs/toolkit';

export interface TemplateState {
  resumeToolbarKeys: any[];
}

const initialState: TemplateState = {
  resumeToolbarKeys: [],
};

export const templateModel = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setToolbarKeys: (state, { payload }) => {
      state.resumeToolbarKeys = payload;
    },
  },
});

export const { setToolbarKeys } = templateModel.actions;

export default templateModel.reducer;
