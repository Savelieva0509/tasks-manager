import Layout from '../../components/Layout/Layout';
import AppBar from '../../components/AppBar/AppBar';
import Modal from '../../components/Modal/Modal';
import TaskList from '../../components/TaskList/TaskList';

const MainPage = () => {
  return (
    <Layout>
      <AppBar />
      <Modal />
      <TaskList />
    </Layout>
  );
};

export default MainPage;
