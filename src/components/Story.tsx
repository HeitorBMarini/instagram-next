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
      <img src={img} alt='user' />
      <p>{username}</p>
    </div>
  );
}
