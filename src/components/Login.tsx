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
      
      <LoginForm headerText="Log In" paragraphText = "If you don't have an account, " linkPath = "/signup" linkText = "Create Account"/>


    </div>
  );
};

export default Login;