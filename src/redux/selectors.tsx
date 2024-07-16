import { RootState } from '../types';

export const getTasks = (state: RootState) => state.tasks.tasks;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;

export const getFilter = (state: RootState) => state.filter.status;

export const getFilteredTasks = (state: RootState) => {
  const { tasks, filter } = state;
  switch (filter.status) {
    case 'all':
      return tasks.tasks; 
    case 'active':
      return tasks.tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.tasks.filter(task => task.completed);
    default:
      return tasks.tasks;
  }
};


