import { RootState } from '../types';

export const getTasks = (state: RootState) => state.tasks.tasks;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;
