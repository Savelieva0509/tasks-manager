import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from '../pages/MainPage/MainPage';
import ArchivePage from '../pages/ArchivePage/ArchivePage';

function App() {
  return (
    <Container className="mt-5">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/archive/*" element={<ArchivePage />} />
      </Routes>
   </Container>
  );
}
export default App;
