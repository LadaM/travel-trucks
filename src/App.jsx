import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CamperList from './components/CampersList';
import CamperDetails from './components/CamperDetails.jsx';
import HomePage from './pages/HomePage.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CamperList />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
