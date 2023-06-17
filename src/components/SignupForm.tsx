import React, { useState } from 'react';
import styles from './SignupForm.module.scss';
import { Link } from 'react-router-dom';

interface TextInfo {
    headerText: string;
    paragraphText: string;
    linkPath: string;
    linkText: string;
}

const SignupForm = (props: TextInfo) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);
  const [isEditingEmail, setIsEditingEmail] = useState<boolean>(false);

  const handleNext = () => {
    setIsEmailEntered(true);
  };

  const handleSignup = (e: React.MouseEvent) => {
    // Handle your login logic here
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    console.log('hello')
  };

  const editEmail = (e: React.MouseEvent) => {
    setIsEditingEmail(true);
  }

  const saveEmail = (e: React.MouseEvent) => {
    setIsEditingEmail(false);
    setIsEmailEntered(true);
  }

  return (
    <div className={styles.signupForm}>
        <h2 className={styles.header}>{props.headerText}</h2>
        <p className={styles.text}>Welcome to Whimsy! Enter an email address to get started.</p>
      {isEmailEntered && !isEditingEmail ? (
        <>
          <div className={styles.email}>
            {email} <button className={styles.editButton} onClick={isEditingEmail? saveEmail: editEmail}>{isEditingEmail ? 'Save' : 'Edit'}</button>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder='Password'
          />
          <button className={styles.signupButton} onClick={handleSignup}>
            Sign Up
          </button>
        </>
      ) : (
        <>
        {isEditingEmail ? (
        <>
        <div className= {styles.editContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <button className={styles.smallSaveButton} onClick={saveEmail}>
                Save
              </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder='Password'
              />
              <button className={styles.signupButton}>
                Sign Up
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
        </>
      )}
      <p className={styles.signupText}>If you don't have an account, <Link to={props.linkPath} relative="path">
      {props.linkText}
    </Link></p>
    </div>
  );
};

export default SignupForm;