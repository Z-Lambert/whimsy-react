import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import logo from '../assets/images/inkwell planet large outlined.png'

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.centeredContainer}>
                <p>Keep track of your favorite fanfictions and never be disorganized again!</p>
            </div>
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
);
    }

export default Home;