import React from 'react';
import styles from './layout.css';



export function Layout({children}) {
  return (//children это удобн способ рендерить одни комп в др комп не привязывая их др к др с пом imports
    <div className={styles.layout}>
      {children}
    </div>
  );
}







