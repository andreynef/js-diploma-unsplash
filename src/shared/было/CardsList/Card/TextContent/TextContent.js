import React from 'react';
import styles from './textcontent.css';
import {MetaData} from "./MetaData/MetaData";



export function TextContent({created, profile, name, ava, description}) {

  return (
    <div className={styles.textContentContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData created={created} profile={profile} name={name} ava={ava}/>
      </div>
      <h2 className={styles.titleContainer}>
        <a href="#">
          ${description}
        </a>
      </h2>
    </div>
  );
}
