import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
