import React from "react";

export function pickFromSyntheticEvent<T extends HTMLElement>() {//хз с большой буквы. Просто есть эта ф. Она забирает атрибут евента.
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');//с пом подобных ф не надо писать много раз e.currentTarget.checked
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');