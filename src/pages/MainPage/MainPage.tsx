import Layout from '../../components/Layout/Layout';
import TaskList from '../../components/TaskList/TaskList';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';
import SearchForm from '../../components/SearchForm/SearchForm';
import css from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Layout>
      <div className={css.installWrapper}>
        <Modal />
        <SearchForm/>
        <Filter />
      </div>
      <TaskList />
    </Layout>
  );
};

export default MainPage;
