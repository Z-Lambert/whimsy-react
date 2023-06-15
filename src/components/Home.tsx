import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import example from '../assets/images/example.png'
import logo from '../assets/images/logo.png'

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <p>Keep track your favorite fanfictions and never be disorganized again!</p>
                <img src={logo}></img>
                <div className={styles.button}>
                    <Link to="/signup">
                        Sign Up
                    </Link>

                    <Link to="/login">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
);
    }

export default Home;