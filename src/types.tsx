// Тип для задачи
export interface TaskTypes {
  id: string;
  title: string;
  text: string;
  completed: boolean;
  deleted: boolean;
  file: {
    name: string;
    url: string;
  };
}

// Тип для состояния задач
export interface TasksState {
  tasks: TaskTypes[];
  deletedTasks: TaskTypes[];
}

// Тип для фильтра
export type FilterStatus = 'all' | 'completed' | 'active';

// Тип для состояния фильтра
export interface FilterState {
  status: FilterStatus;
}

// Тип для всего состояния Redux
export interface RootState {
  tasks: TasksState;
  filter: FilterState;
}

// Определение типа значений формы задачи
export interface TaskFormValues {
  title: string;
  text: string;
  file: {
    name: string;
    url: string;
  };
}
