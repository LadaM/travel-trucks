import { ICONS } from '../constants'; // Adjust the path to your constants file
import css from '../common.module.css';
import clsx from 'clsx';

const Icon = ({ name, className = '' }) => {
  const iconName = ICONS[name.toLowerCase()];
  if (!iconName) {
    console.warn(`Icon "${name}" not found in ICONS constants`);
    return null;
  }

  return (
    <svg className={clsx(css.icon, className)}>
      <use href={`/icons.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
