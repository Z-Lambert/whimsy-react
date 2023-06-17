import React from 'react';
import Icon from './Icon';
import styles from './Signup.module.scss';
import background from '../assets/images/background.png'
import SignupForm from './SignupForm';

const Login: React.FC = () => {

  return (
    <div className={styles.container} style={{ 
        backgroundImage: `url(${background})`,
      }}>
      <div className={styles.icon}>
        <Icon white={false}/>
      </div>
      <div className={styles.form}>
        <SignupForm headerText="Create Account" paragraphText = "If you already have an account, " linkPath = "/login" linkText='Sign In'/>
      </div>
    </div>
  );
};

export default Login;