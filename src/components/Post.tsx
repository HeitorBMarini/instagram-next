import { HiDotsHorizontal } from "react-icons/hi";
import { ImGift } from "react-icons/im";

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
        
      </div>
    );
  };
  
  export default Post;
  