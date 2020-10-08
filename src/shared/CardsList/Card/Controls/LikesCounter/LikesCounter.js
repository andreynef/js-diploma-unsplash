import React from 'react';
import styles from './likesCounter.css';
import HeartIconUnpressed from "../../../../../Icons/HeartIconUnpressed.svg";

export function LikesCounter({likes, pressed, setLikedId}) {
  return (
    <div className={styles.likesCounter}>
      <span className={styles.likesValue}>{likes}</span>
      <button className={styles.button} onClick={()=>{console.log('btn is pressed')}}>
        <img src={HeartIconUnpressed} alt={'heart'}/>
      </button>
    </div>
  );
}