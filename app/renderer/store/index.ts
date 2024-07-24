import { configureStore } from '@reduxjs/toolkit';
import globalModel from './features/globalModel';
import resumeModel from './features/resumeModel';

const store = configureStore({
  reducer: {
    global: globalModel,
    resume: resumeModel,
  },
});

export default store;
