
import white_icon from '../assets/images/inkwell planet icon white outlined.png'
import black_icon from '../assets/images/inkwell planet icon outlined transparent.png'
import { Link } from 'react-router-dom';
import styles from './Icon.module.scss'

interface IconInfo {
    white: boolean;
}
const Icon = (props: IconInfo) => {

  return (
    <Link to="/">
    <img className={styles.iconImage} src={props.white? white_icon : black_icon} alt="Inkwell Planet Icon"></img>
    </Link>
  );
};

export default Icon;