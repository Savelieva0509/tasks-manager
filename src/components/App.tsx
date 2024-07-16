import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ArchivePage from '../pages/ArchivePage/ArchivePage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/archive/*" element={<ArchivePage />} />
    </Routes>
  );
}
export default App;
