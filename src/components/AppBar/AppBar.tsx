import { Link } from 'react-router-dom';
import css from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={css.wrapper}>
      <Link className={css.link} to="/archive">
        Go to Archive Page
      </Link>
    </div>
  );
};

export default AppBar;
