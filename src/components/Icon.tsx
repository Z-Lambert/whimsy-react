import React from 'react';
import styles from './Icon.module.scss';
import icon from '../assets/images/inkwell planet icon.png'
import { Link } from 'react-router-dom';



const Icon: React.FC = () => {

  return (
    <header className={styles.icon}>
      <div>
        <Link to="/">
        <img src={icon} alt="Inkwell Planet Icon"></img>
        </Link>
      </div>
    </header>
  );
};

export default Icon;