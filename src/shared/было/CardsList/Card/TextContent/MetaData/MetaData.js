import React from 'react';
import './metadata.css';

export function MetaData({created, profile, name, ava}) {
  const date = created.slice(0,9);
  // const time = created.slice(11,15);
  // const formattedDate = [date, time].join("/")

  return (
    <div className="metaData">
      <a href={profile} className="userLink">
        <img
          className="avatar"
          src={ava}
          alt="avatar"
        />
        <p>{name}</p>
      </a>
      <span className="createdAt">
            {/*<span className="publishedLabel">*/}
            {/*  опубликовано*/}
            {/*</span>*/}
        {date}
      </span>
    </div>
  );
}
