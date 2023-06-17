import React from 'react';
import Icon from './Icon';
import LoginForm from './LoginForm';
import styles from './Login.module.scss';
import background from '../assets/images/background.png'

const Login: React.FC = () => {

  return (
    <div className={styles.container} style={{ 
        backgroundImage: `url(${background})`,
      }}>
        <div className={styles.group}>
          <div className={styles.form}>
            <LoginForm headerText="Log In" paragraphText = "If you don't have an account, " linkPath = "/signup" linkText = "Create Account"/>
          </div>
          <div className={styles.loginIcon}>
            <Icon white={true}/>
          </div>
        </div>
    </div>
  );
};

export default Login;