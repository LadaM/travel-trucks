import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import logo from '../assets/TravelTrucks.svg';
import clsx from 'clsx';

const getNavLinkClass = (isActive) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <img src={logo} alt="TravelTrucks logo" />
      <ul className={css.navLinkContainer}>
        <li><NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink></li>
        <li><NavLink to="/catalog" className={({ isActive }) => getNavLinkClass(isActive)}>Catalog</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
