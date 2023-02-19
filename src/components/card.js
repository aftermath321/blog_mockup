import React from 'react'
import Image from 'next/image';

const Card = ({image, alt, h1, p, author}) => {
  return (
    <div className="card">
      <Image alt={alt} src={image} className="thumbnail" />

      <content>
        <h1>{h1}</h1>
        <p>{p}</p>
        <span>{author}</span>
      </content>
    </div>
  );
}

export default Card