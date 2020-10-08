import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls/Controls";
import {TextContent} from "./TextContent/TextContent";
import {Preview} from "./Preview/Preview";
import {Link} from "react-router-dom";

export function Card({add,url, created, likes, profile, name, ava, description, open, id, getImageObj, pressed, setPressed, setLikedId}) {
  return (
    <div className={styles.card}>
      <TextContent created={created} profile={profile} name={name} ava={ava} description={description}/>
      <Link to={'/cardpage'} onClick={()=> getImageObj(id)} >
        <Preview url={url} />
      </Link>
      <Controls likes={likes} pressed={pressed} setPressed={setPressed} setLikedId={setLikedId}/>

      {open && (//рендер только при стстусе open
        <Link
          className={styles.exitButton}
          to={'/'}
        >
          [exit]
        </Link>
      )}
    </div>
  );
}
