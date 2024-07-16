import { useSelector } from 'react-redux';
import { getDeletedTasks } from '.././../redux/selectors';
import Task from '../Task/Task';
import css from '../TaskList/TaskList.module.scss';

const ArchiveList = () => {
  const deletedTasks = useSelector(getDeletedTasks);

  return (
    <ul className={css.list} style={{ marginTop: '100px' }}>
      {deletedTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} isArchive />
        </li>
      ))}
    </ul>
  );
};

export default ArchiveList;
