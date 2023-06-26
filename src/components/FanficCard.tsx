import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import IFanFiction from '../interfaces/Fanfiction';
import styles from './FanficCard.module.scss'
import openLinkIcon from '../assets/images/open_in_new_icon.png'
import expandIcon from '../assets/images/expand_more.png'
import collapseIcon from'../assets/images/expand_less.png'
import shareIcon from '../assets/images/share_icon.png'
import deleteIcon from '../assets/images/redDeleteIcon.png'
import starIcon from '../assets/images/starIcon.png'

interface IFanFictionCardProps {
  fanfic: IFanFiction;
  activeTab: string;
}

const FanFictionCard: React.FC<IFanFictionCardProps> = ({ fanfic, activeTab }) => {
  const [expanded, setExpanded] = useState(false);
  const [ref, { height }, refresh] = useMeasure();

  const expandStyles = useSpring({
    height: expanded ? Math.round(height) : 0,
    config: { tension: 100, friction: 20 },
    from: { height: 0 },
  });

  // Toggle expanded state
  const handleCardExpansion = () => {
    refresh();
    setExpanded(!expanded);
  }

  return (
    <div className={styles.fanficCard}>
      <div className={styles.fanficHeader}>
        <h2>{fanfic.title}</h2>
        <a className= {styles.urlLink} href = {fanfic.url} target="_blank">
          <img className={styles.miniIcon} src={openLinkIcon}></img>
        </a>
        <img className={styles.miniIcon} src={shareIcon}></img>
        <img className={styles.miniIcon} src={starIcon}></img>
        <img className={styles.miniIcon} src={deleteIcon}></img>
      </div>
      <div className={styles.fanficBody}>
          <p>by {fanfic.author}</p>
          <p className={styles.fandomsText}>{fanfic.fandoms}</p>
          <div className={styles.metaData}>
            <p>{fanfic.genres.join(' / ')}</p>
            <p>{fanfic.characters.join(', ')}</p>
            <p>Chapters: {fanfic.chapterCount}</p>
            <p>Words: {fanfic.wordCount.toLocaleString('en', {useGrouping:true})}</p>
            <p>Published: {fanfic.published}</p>
            <p>Updated: {fanfic.updated}</p>
            <p>{fanfic.completed ? 'Complete' : 'Incomplete'}</p>
          </div>
          <div className={styles.tagList}>{fanfic.tags?.map(tag=><div className={styles.tag}>{tag}</div>)}</div>
          <p>{fanfic.summary}</p>
          {!expanded && <div className={styles.expandIcon} onClick={handleCardExpansion}><img src={expandIcon}></img> </div>}
        </div>
        <animated.div style={expandStyles}>      
        <div ref={ref} className={styles.fanficFooter}>
          <p>{fanfic.status}</p>
          <div className={styles.expandIcon} onClick={handleCardExpansion}>{expanded ? <img src={collapseIcon}></img> : <></>}</div>
          </div>
        </animated.div>
    </div>
  );
};

export default FanFictionCard;