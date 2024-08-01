import { configureStore, Tuple } from '@reduxjs/toolkit';
import globalModel from './features/globalModel';
import resumeModel from './features/resumeModel';
import templateModel from './features/templateModel';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    global: globalModel,
    resume: resumeModel,
    template: templateModel,
  },
  middleware: () => new Tuple(logger),
});

export default store;
