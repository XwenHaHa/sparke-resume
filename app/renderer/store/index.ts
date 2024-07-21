import { configureStore } from '@reduxjs/toolkit';
import globalModel from './features/globalModel';

const store = configureStore({
  reducer: {
    global: globalModel,
  },
});

export default store;
