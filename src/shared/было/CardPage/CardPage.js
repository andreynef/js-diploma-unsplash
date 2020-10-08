import React from 'react';
import styles from './cardPage.css';
import {Link} from "react-router-dom";
import HeartIconPressed from "../../../src/shared/Icons/HeartIconPressed";
import HeartIconUnpressed from "../../../src/shared/Icons/HeartIconUnpressed";

export function CardPage({openedImage, open, pressed, likePhoto, setLikedId, likedId}) {
  const date = openedImage.created_at.slice(0,9);

  return (
      <div className={styles.cardPage}>
        <div className={styles.centralContainer}>
          <div className={styles.imageContainer}>
            <img
              src={openedImage.urls.regular}
              alt={openedImage.alt_description}
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.authorContainer}>
              <a href={openedImage.user.links.html} className={styles.userLink}>
                <img className={styles.avatar} src={openedImage.user.profile_image.small} alt="avatar"/>
                <p>{openedImage.user.first_name}</p>
              </a>
            </div>
            <div className={styles.likesContainer}>
              <div className={styles.likesCounter}>
                <span className={styles.likesValue}>{openedImage.likes}</span>
                <button className={styles.button} onClick={()=>{likePhoto(openedImage.id); console.log('likePhoto is done on page')}}>
                  {pressed? <HeartIconPressed/> : <HeartIconUnpressed/>}
                </button>
              </div>
              <span className={styles.createdAt}>{date}</span>
            </div>
          </div>
        </div>
        <Link className={styles.exitButton} to={'/'} >
          [exit]
        </Link>
      </div>
    )
}
