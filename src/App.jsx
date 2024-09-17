import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CamperDetails from './components/CamperDetails/CamperDetails.jsx';
import HomePage from './pages/HomePage';
import CampersCatalogPage from './pages/CampersCatalogPage';
import FeaturesPage from './components/CamperDetails/CamperFeatures.jsx';
import ReviewsPage from './components/CamperDetails/CamperReviews.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from './store/campersSlice';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetails />}>
            <Route path="features" element={<FeaturesPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
