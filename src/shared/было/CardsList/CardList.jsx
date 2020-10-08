import React from 'react';
import styles from './cardList.css';
import {Card} from "./Card/Card";

export function CardList({add,images, getImageObj, pressed, setPressed, setLikedId}) {
  let allCardsArr;
  if (images.length === 0) {
      allCardsArr=<p>empty list</p>
  } else {
    allCardsArr = images.map((item, i) => {
      return (
          <Card
            key={item.id}
            id={item.id}
            created={item.created_at}
            name={item.user.first_name}
            profile={item.user.links.html}
            likes={item.likes}
            url={item.urls.thumb}
            ava={item.user.profile_image.small}
            description={item.alt_description}
            getImageObj={getImageObj}
            className ={styles.card}
            pressed={pressed}
            setPressed={setPressed}
            setLikedId={setLikedId}
          />
      )
    })}

    return (
      <ul className={styles.cardList}>
        {allCardsArr}
        <button
          type="button"
          onClick={add}
        >
          Загрузить еще
        </button>
      </ul>
    )
}
