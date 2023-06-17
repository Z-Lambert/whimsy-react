import React from 'react';
import FanFictionCard from './FanficCard';
import IFanFiction from '../interfaces/Fanfiction';
import styles from './Dashboard.module.scss'
import Filter from './Filter';

interface IDashboardProps {
  fanfictions: IFanFiction[];
}

const Dashboard: React.FC<IDashboardProps> = ({ fanfictions }) => {
  return (
    <div className={styles.cardContentContainer}>
        <div className={styles.cardsContainer}>
        {fanfictions.map(fanfic => (
            <FanFictionCard fanfic={fanfic} key={fanfic.url} />
        ))}
        </div>
        <div className={styles.filterContainer}>
            <Filter />
        </div>
    </div>
  );
};

export default Dashboard;