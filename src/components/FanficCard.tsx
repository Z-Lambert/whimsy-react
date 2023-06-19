import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import IFanFiction from '../interfaces/Fanfiction';
import styles from './FanficCard.module.scss'
import openLinkIcon from '../assets/images/open_in_new_icon.png'
import expandIcon from '../assets/images/expand_more.png'
import collapseIcon from'../assets/images/expand_less.png'

interface IFanFictionCardProps {
  fanfic: IFanFiction;
}

const FanFictionCard: React.FC<IFanFictionCardProps> = ({ fanfic }) => {
  const [expanded, setExpanded] = useState(false);
  const [ref, { height }, refresh] = useMeasure();

  const expandStyles = useSpring({
    height: expanded ? Math.round(height) : 0,
    config: { tension: 100, friction: 20 },
    from: { height: 0 },
  });

  // Toggle expanded state
  const handleCardExpansion = () => {
    setExpanded(!expanded);
    refresh();
  }

  return (
    <div className={styles.fanficCard}>
      <div className={styles.fanficHeader}>
        <h2>{fanfic.title}</h2>
        <a href = {fanfic.url} target="_blank">
          <img className={styles.miniIcon} src={openLinkIcon}></img>
        </a>
      </div>
      <div className={styles.fanficBody}>
          <p>by {fanfic.author}</p>
          <p>{fanfic.summary}</p>
          {!expanded ? <div className={styles.expandIcon} onClick={handleCardExpansion}><img src={expandIcon}></img> </div> : <></>}
        </div>
        <animated.div style={expandStyles}>      
        <div ref={ref} className={styles.fanficFooter}>
          <p>Words: {fanfic.wordCount}</p>
          <p>{fanfic.fandoms}</p>
          <p>{fanfic.status}</p>
          <div className={styles.expandIcon} onClick={handleCardExpansion}>{expanded ? <img src={collapseIcon}></img> : <></>}</div>
          </div>
        </animated.div>
    </div>
  );
};

export default FanFictionCard;