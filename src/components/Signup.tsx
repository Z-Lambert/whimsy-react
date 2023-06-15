import React from 'react';
import Icon from './Icon';
import LoginForm from './LoginForm';
import styles from './Login.module.scss';
import background from '../assets/images/background.png'

const Login: React.FC = () => {

  return (
    <div className={styles.body} style={{ 
        backgroundImage: `url(${background})`,
      }}>
      <Icon />
      
      <LoginForm headerText="Create Account" paragraphText = "If you already have an account, " linkPath = "/login" linkText='Sign In'/>

    </div>
  );
};

export default Login;