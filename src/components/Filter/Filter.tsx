import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getFilter } from '.././../redux/selectors';
import { setFilter } from '../../redux/filter-slice';
import css from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
      </Button>
      <Button
        variant="primary"
        type="button"
        onClick={() => handleFilterChange(statusFilters.active)}
        active={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        variant="primary"
        type="button"
        onClick={() => handleFilterChange(statusFilters.completed)}
        active={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
