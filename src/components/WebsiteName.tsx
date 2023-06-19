import name from '../assets/images/websiteName.png'
import { Link } from 'react-router-dom';
import styles from './WebsiteName.module.scss'


const Icon = () => {

  return (
    <Link to="/">
    <img className={styles.websiteName} src={name} alt="Whimsy: Website Name Text"/>
    </Link>
  );
};

export default Icon;