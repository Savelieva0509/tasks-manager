import { useSelector, useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { getFilter, getFilteredTasks } from '../../redux/selectors';
import { setFilter } from '../../redux/filter-slice';
import css from './Filter.module.scss';
import { statusFilters } from '../../redux/constants';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const tasks = useSelector(getFilteredTasks);

  const handleFilterChange = (newFilter: string) => {
    dispatch(setFilter(newFilter));
  };

  const countTasks = (filterStatus: string) => {
    switch (filterStatus) {
      case statusFilters.all:
        return tasks.length;
      case statusFilters.active:
        return tasks.filter(task => !task.completed).length;
      case statusFilters.completed:
        return tasks.filter(task => task.completed).length;
      default:
        return 0;
    }
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
          {countTasks(statusFilters.all)}
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
          {countTasks(statusFilters.active)}
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
          {countTasks(statusFilters.completed)}
        </Badge>
      </Button>
    </div>
  );
};

export default Filter;
