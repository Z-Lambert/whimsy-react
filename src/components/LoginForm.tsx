import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';

interface TextInfo {
    headerText: string;
    paragraphText: string;
    linkPath: string;
    linkText: string;
}

const LoginForm = (props: TextInfo) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);

  const handleNext = () => {
    setIsEmailEntered(true);
  };

  const handleLogin = (e: React.MouseEvent) => {
    // Handle your login logic here
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    console.log('hello')
  };

  return (
    <div className={styles.loginForm}>
        <h2 className={styles.header}>{props.headerText}</h2>
      {isEmailEntered ? (
        <>
          <div className={styles.email}>
            {email} <button className={styles.editButton}>Edit</button>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder='Password'
          />
          <button className={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder='Email'
          />
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        </>
      )}
      <p className={styles.signupText}>If you don't have an account, <Link to={props.linkPath} relative="path">
      {props.linkText}
    </Link></p>
    </div>
  );
};

export default LoginForm;