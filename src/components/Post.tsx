import { BookmarkIcon } from "@heroicons/react/16/solid";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImGift } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsEmojiGrin } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";

interface PostProps {
    key: string;
    id: string;
    username: string;
    userImage: string; // Make sure this is included
    img: string;
    caption: string;
  }
  
  const Post: React.FC<PostProps> = ({ id, username, userImage, img, caption }) => {
    // Component implementation
    return (
      <div className="bg-white my-7 border rounded-md">
        
        <div className="flex items-center p-5">
            <img className="h-12 rounded-full object-cover
             bordeer p-1 mr-3" src={userImage } alt={username}/>
            <p className="font-bold flex-1">{username}</p>
            <HiDotsHorizontal className="h-5"/>
        </div>

        <img className="object-cover w-full" src={img} alt="" />

        <div className="flex gap-1 justify-between px-4 mt-3">
          <div className="flex space-x-4">
            <IoIosHeartEmpty className="h-7 hover:scale-125 
            transition-transform duration-200 ease-out 
            cursor-pointer "/>

            
            <IoChatbubbleOutline className="h-7 hover:scale-125 
            transition-transform duration-200 ease-out 
            cursor-pointer "/> 

          </div>
          <IoBookmarkOutline className="h-7 hover:scale-125 
            transition-transform duration-200 ease-out 
            cursor-pointer "/>
        </div>

        <p className="p-5 truncate">
          <span className="font-bold mr-2 "> {username}</span>
          {caption}
        </p>
        
        <form className="flex items-center p-4 space-x-2">
        <BsEmojiGrin className="h-7"/>
        <input type="text" className="border-none flex-1 
        focus:ring-0" placeholder="Adicione Comentário..." />
        <button className="hover:text-blue-500 font">Publicar</button>
        </form>
      </div>
    );
  };
  
  export default Post;
  