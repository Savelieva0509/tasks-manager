import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TaskTypes, TasksState } from '../types';

const initialState: TasksState = {
  tasks: [
    {
      id: '111',
      title: 'Add structure of the project',
      text: 'Сreate a project structure in accordance with company standards and requirements ',
      completed: true,
      deleted: false,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },
    {
      id: '222',
      title: 'Implement authentication system',
      text: 'Implement authentication system using JWT for secure access to the application',
      completed: false,
      deleted: false,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },
    {
      id: '333',
      title: 'Integrate backend with frontend',
      text: 'Integrate backend APIs with frontend components to enable data exchange between them',
      completed: true,
      deleted: false,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },

    {
      id: '444',
      title: 'Deploy application to production',
      text: 'Deploy the application to production server using Docker and Kubernetes for scalability',
      completed: false,
      deleted: false,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },
  ],
  deletedTasks: [
    {
      id: '555',
      title: 'Design user interface',
      text: 'Design user-friendly interface with modern design principles and responsive layout',
      completed: true,
      deleted: true,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },
    {
      id: '666',
      title: 'Write unit tests',
      text: 'Write comprehensive unit tests to ensure the reliability and stability of the application',
      completed: true,
      deleted: true,
      file: 'https://docs.google.com/document/d/19xL_ALYDZshz7cA2lQcOi3xD3x-nYDGVLnqv_GweNko/edit#heading=h.59bwmdjjr3v7',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskTypes>) => {
        state.tasks.push(action.payload);
      },
      prepare: (text: string, title: string, file: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            text,
            completed: false,
            deleted: false,
            file,
          },
        };
      },
    },
    editTask(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        text: string;
        file: string;
      }>
    ) {
      const { id, title, text, file } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.title = title;
        task.text = text;
        task.file = file;
      }
    },
    deleteTask(state, action) {
      const idToDelete = action.payload;
      const deletedTaskIndex = state.tasks.findIndex(
        task => task.id === idToDelete
      );
      if (deletedTaskIndex !== -1) {
        const deletedTask = state.tasks.splice(deletedTaskIndex, 1)[0];
        deletedTask.deleted = true;
        state.deletedTasks.push(deletedTask);
      }
    },
    toggleCompleted: (state, action) => {
      const idToToggle = action.payload;
      const task = state.tasks.find(task => task.id === idToToggle);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, editTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
