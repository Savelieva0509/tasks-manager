import { RootState } from '../types';

export const getTasks = (state: RootState) => state.tasks.tasks;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;

export const getFilter = (state: RootState) => state.filter.status;

export const getActiveTasks = (state: RootState) =>
  state.tasks.tasks.filter(task => !task.completed);

export const getCompletedTasks = (state: RootState) =>
  state.tasks.tasks.filter(task => task.completed);

export const getSearchQuery = (state: RootState) => state.search.query;

export const getFilteredTasks = (state: RootState) => {
  const { tasks, filter } = state;
  const searchQuery = getSearchQuery(state).toLowerCase();

  let filteredTasks = tasks.tasks;

  switch (filter.status) {
    case 'active':
      filteredTasks = filteredTasks.filter(task => !task.completed);
      break;
    case 'completed':
      filteredTasks = filteredTasks.filter(task => task.completed);
      break;
    default:
      break;
  }

  const searchedTasks = searchQuery
    ? filteredTasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredTasks;

  return {
    totalTasks: tasks.tasks.length,
    filteredTasks: searchedTasks,
  };
};
