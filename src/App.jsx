import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CamperList from './components/CampersList';
import CamperDetails from './components/CamperDetails.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/catalog" element={<CamperList />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
