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

  const handleLogin = (e: React.MouseEvent) => {
    // Handle your login logic here
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    console.log('hello')
  };

  return (
    <div className={styles.loginForm}>
        <h2 className={styles.header}>{props.headerText}</h2>
          <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder='Email'
              />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder='Password'
          />
          <Link to="/dashboard">
            <button className={styles.loginButton}>
              Log In
            </button>
          </Link>
      <p className={styles.loginText}>
        If you don't have an account, <Link to={props.linkPath} relative="path">{props.linkText}</Link>
      </p>
    </div>
  );
  }
export default LoginForm;