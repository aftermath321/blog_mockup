import React, { Suspense } from 'react'
import Image from 'next/image';
import {BsHourglassSplit} from 'react-icons/bs' 

const Card = ({image, alt, h1, p, author}) => {
  return (
    <div className="card">
      <Suspense fallback={<BsHourglassSplit/>}>
        <Image alt={alt} src={image} className="thumbnail" />
      </Suspense>

      <content>
        <h1>{h1}</h1>
        <p>{p}</p>
        <span>{author}</span>
      </content>
    </div>
  );
}

export default Card