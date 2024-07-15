// Тип для задачи
export interface TaskTypes {
  id: string;
  title: string;
  text: string;
  completed: boolean;
  deleted: boolean;
  file: string;
}

// Тип для состояния задач
export interface TasksState {
  tasks: TaskTypes[];
  deletedTasks: TaskTypes[];
}

// Тип для всего состояния Redux
export interface RootState {
  tasks: TasksState;
}
