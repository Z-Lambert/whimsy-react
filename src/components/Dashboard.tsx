import React, { useState } from 'react';
import FanFictionCard from './FanficCard';
import IFanFiction from '../interfaces/Fanfiction';
import styles from './Dashboard.module.scss'
import Filter from './Filter';

interface IDashboardProps {
  fanfictions: IFanFiction[];
}

const Dashboard: React.FC<IDashboardProps> = ({ fanfictions }) => {

  const [selectedTab, setSelectedTab] = useState('All');  

  const tabs = ['All', 'To read', 'Reading', 'Up to date', 'Completed', 'Abandoned'];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.cardContentContainer}>
        <div className={styles.navTabs}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${selectedTab === tab ? styles.selected : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.cardsContainer}>
          {fanfictions.filter(fanfic => selectedTab === 'All' || fanfic.status === selectedTab).map(fanfic => 
          (<FanFictionCard fanfic={fanfic} activeTab={selectedTab} />))}
        </div>
      </div>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
    </div>
  );
};

export default Dashboard;