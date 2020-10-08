import React from 'react';
import styles from './useeffecttest.css';

export function UseEffectTest({title}) {
  //как я понял - при первоначальной отрисовке компонента сработает useIsMounted() и запишется в const[isMount] сработаетинициация при ComponentDidMount,

  console.log('-C(1.0) initializing [isMounted=undefined] through myCustomHook');
  const[isMounted]=useIsMounted();
  console.log('-C(1.1) got from f isMounted=',isMounted);

  React.useEffect(()=> {
    console.log('-C(effect) deps [isMounted]. Check isMounted=', isMounted);//при первом проходе не отображается, тк еще не смонтирован.
  },[isMounted])

  console.log('-C(2) rendering h1 with isMounted=', isMounted);
  return (
    <h1>{title}</h1>
  );
}


function useIsMounted() {
  console.log('-f(1.0) initializing State isMounted to false');
  const[isMounted, setIsMounted]=React.useState(false);//установка начального состояния false.
  console.log('-f(1.1) Check state isMounted=', isMounted);

  React.useEffect(()=> {//когда компонент примонтирован. Пока прохожу мимо, вернусь когда примонтируюсь, тобишь чер 1 сек.
    console.log('-f(effect 1.0) changing isMounted to true, deps []. Check isMounted', isMounted );
    setIsMounted(true)
    console.log('-f(effect 1.1) deps [] , check isMounted=', isMounted );
  },[])//в зависимости пусто = сработает на ComponentDidMount

  console.log('-f(2) return [isMounted] =', isMounted );
  return [isMounted]
}
