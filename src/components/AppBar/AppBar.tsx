import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
import css from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={css.wrapper}>
      <Link className={css.link} to="/archive">
        Go to Archive Page
      </Link>
      <Filter/>
    </div>
  );
};

export default AppBar;
