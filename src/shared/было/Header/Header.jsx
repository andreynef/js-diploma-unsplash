import React from 'react';
import styles from './header.css';

export function Header({openedThread, bookmark}) {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.centralContainer}>
          <div className={styles.logoContainer}>
            <img src={'https://www.flaticon.com/svg/static/icons/svg/1/1394.svg'} alt={'logo'}/>
          </div>
          <div className={styles.userContainer}>
            <a href={'#'}>
              <img
                className={styles.avatar}
                src={'#'}
                alt="user avatar"
              />
              user name
            </a>
          </div>
        </div>
    </header>
  );
}





