import { useSelector, useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import {
  getFilter,
  getActiveTasks,
  getTasks,
  getCompletedTasks,
} from '../../redux/selectors';
import { setFilter } from '../../redux/filter-slice';
import css from './Filter.module.scss';
import { statusFilters } from '../../redux/constants';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const allTasks = useSelector(getTasks);
  const activeTasks = useSelector(getActiveTasks);
  const completedTasks = useSelector(getCompletedTasks);

  const handleFilterChange = (newFilter: string) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        variant="primary"
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
        active={filter === statusFilters.all}
      >
        All
        <Badge bg="light" text="dark" className="ms-2 fs-6">
          {allTasks.length}
        </Badge>
      </Button>
      <Button
        variant="danger"
        type="button"
        onClick={() => handleFilterChange(statusFilters.active)}
        active={filter === statusFilters.active}
      >
        Active
        <Badge bg="light" text="dark" className="ms-2 fs-6">
          {activeTasks.length}
        </Badge>
      </Button>
      <Button
        variant="success"
        type="button"
        onClick={() => handleFilterChange(statusFilters.completed)}
        active={filter === statusFilters.completed}
      >
        Completed
        <Badge bg="light" text="dark" className="ms-2 fs-6">
          {completedTasks.length}
        </Badge>
      </Button>
    </div>
  );
};

export default Filter;
