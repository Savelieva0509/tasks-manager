import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks-slice';
import { filterReducer } from './filter-slice';
import { searchReducer } from './search-slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});
