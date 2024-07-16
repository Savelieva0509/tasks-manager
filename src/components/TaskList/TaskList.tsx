import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasks, getFilter } from '.././../redux/selectors';
import { statusFilters } from '.././../redux/constants';
import { TasksState, FilterStatus } from '../../types';
import css from './TaskList.module.scss';

const getVisibleTasks = (
  tasks: TasksState['tasks'],
  statusFilter: FilterStatus
) => {
  switch (statusFilter) {
    case statusFilters.active: {
      return tasks.filter(task => !task.completed);
    }
    case statusFilters.completed: {
      return tasks.filter(task => task.completed);
    }
    default: {
      return tasks;
    }
  }
};
const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);
  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
