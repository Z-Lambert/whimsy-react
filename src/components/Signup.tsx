import React from 'react';
import Icon from './Icon';
import styles from './Signup.module.scss';
import background from '../assets/images/background.png'
import SignupForm from './SignupForm';
import WebsiteName from './WebsiteName';

const Login: React.FC = () => {

  return (
    <div className={styles.container} style={{ 
        backgroundImage: `url(${background})`,
      }}>
      <div className={styles.group}>
        <div className={styles.Loginicon}>
          <Icon white={true}/>
          <WebsiteName/>
        </div>
        <div className={styles.form}>
          <SignupForm headerText="Create Account" paragraphText = "If you already have an account, " linkPath = "/login" linkText='Log In'/>
        </div>
      </div>
    </div>
  );
};

export default Login;