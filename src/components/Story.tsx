'use client'

import React from 'react';

interface StoryProps {
  img: string;
  username: string;
}



// Usa a interface StoryProps para tipar as props
export default function Story({ img, username }:StoryProps) {
  return (
    <div>
      <img className='h-14 rounded-full p-[1.5px]
       border-red-500 border-2 
       cursor-pointer hover:scale-110 transition-transform duration-200
       ease-out ' src={img} alt={username} />
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  );
}
