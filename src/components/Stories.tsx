import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
// Defina um tipo para os objetos dentro do array storyUsers
type StoryUser = {
  username: string;
  img: string;
  id: string;
};

export default function Stories() {
  const [storyUsers, setSoryUsers] = useState<StoryUser[]>([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i: any) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=3${Math.ceil(Math.random() * 9)}`,
      id: i,
    }));
    setSoryUsers(storyUsers);
    console.log(storyUsers)
  }, []);
  return <div className="flex space-x-2 p-6 bg-white
  border-gray-200 mt-8 border overflow-x-scroll rounded-sm no-scrollbar" >
    {storyUsers.map(user=> (
      <Story key={user.id} username={user.username} img={user.img}
      />
    ))}
  </div>;
}
