import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getFilteredTasks } from '../../redux/selectors';
import { TaskTypes } from '../../types';
import css from './TaskList.module.scss';

const TaskList = () => {
  const { totalTasks, filteredTasks } = useSelector(getFilteredTasks) as {
    totalTasks: number;
    filteredTasks: TaskTypes[];
  };

  if (totalTasks === 0) {
    return <p className={css.noResults}>No tasks available.</p>;
  }

  return (
    <>
      {filteredTasks.length > 0 ? (
        <ul className={css.list}>
          {filteredTasks.map(task => (
            <li className={css.listItem} key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noResults}>No tasks found matching your search.</p>
      )}
    </>
  );
};

export default TaskList;