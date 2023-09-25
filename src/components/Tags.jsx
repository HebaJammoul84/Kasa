import React from 'react';
import '../styles/Tags.css';

const Tags = ({ tagList }) => {
  return (
    <div className="tag-container">

      {tagList.map((data) => (
        <span key={data}>{data}</span>
      ))}

    </div>
  );
};

export default Tags;