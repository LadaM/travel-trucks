import css from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.home}>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <button onClick={() => navigate('/catalog')} className={clsx(css.primaryButton, css.button)}>View Now</button>
    </div>
  );
};

export default HomePage;