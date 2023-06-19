import React, { useState } from 'react';
import styles from './Filter.module.scss'
import data from '../../src/sampleData'

const Filter: React.FC = () => {
    const [activeTab, setActiveTab] = useState('tags');

  const selectTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.tabContainer}>
        <div id={styles.tabSlider}></div>
        <button className={styles.tagsTab} onClick={() => selectTab('tags')}>Tags</button>
        <button className={styles.dataTab} onClick={() => selectTab('metaData')}>Meta Data</button>
      </div>

      <SelectedTagsArea />

      {activeTab === 'tags' && <TagsTab />}
      {activeTab === 'metaData' && <MetaDataTab />}

      
    </div>
  );
};

// This component displays the tag search and popular tags
const TagsTab = () => {
  // You'll need to implement the functionality to search tags and select popular tags
  return (
    <div>
      <input type="text" placeholder="Search tags" />
      <div className={styles.defaultTagList}>
        {data.map(story=><div className={styles.defaultTag}>{story.tags}</div>)}
      </div>
    </div>
  );
};

// This component displays the meta data search options
const MetaDataTab = () => {
  // You'll need to implement the functionality to search meta data
  return (
    <div>
      {/* Render meta data search options here */}
    </div>
  );
};

// This component displays the selected tags
const SelectedTagsArea = () => {
  // You'll need to implement the functionality to manage selected tags
  return (
    <div>
      {/* Render selected tags here */}
    </div>
  );
};

export default Filter;