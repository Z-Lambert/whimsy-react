import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import IFanFiction from '../interfaces/Fanfiction';
import styles from './FanficCard.module.scss'

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
    <div className={styles.fanficCard} onClick={handleCardExpansion}>
      <div className={styles.fanficHeader}>
        <h2>{fanfic.title}</h2>
      </div>
      <div className={styles.fanficBody}>
          <p>by {fanfic.author}</p>
          <p>{fanfic.summary}</p>
        </div>
        <animated.div style={expandStyles}>      
        <div ref={ref} className={styles.fanficFooter}>
          <p>Words: {fanfic.wordCount}</p>
          <p>{fanfic.fandoms}</p>
          <p>{fanfic.status}</p>
          </div>
        </animated.div>
    </div>
  );
};

export default FanFictionCard;