import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CamperDetails from './components/CamperDetails.jsx';
import HomePage from './pages/HomePage.jsx';
import CampersCatalogPage from './pages/CampersCatalogPage.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from './store/campersSlice.js';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, []);

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersCatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
