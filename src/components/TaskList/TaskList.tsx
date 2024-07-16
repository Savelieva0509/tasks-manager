import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getFilteredTasks } from '../../redux/selectors';
import { TaskTypes } from '../../types';
import css from './TaskList.module.scss';

const TaskList = () => {
  const tasks = useSelector(getFilteredTasks) as TaskTypes[];

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
