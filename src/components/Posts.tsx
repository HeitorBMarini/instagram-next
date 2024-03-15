import React from 'react';
import Post from './Post';

// Interface as you've defined it
interface PostProps {
    id: string;
    username: string;
    userImage: string;
    img: string;
    caption: string;
}

// Post data structure based on your interface
interface PostData {
    id: string;
    username: string;
    userImage: string;
    img: string;
    caption: string;
}

const Posts: React.FC = () => {
    const posts: PostData[] = [
        {
            id: '1',
            username: 'heitor.marini195',
            userImage: "data:image/jpeg;base64,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",
            img: "https://images.unsplash.com/photo-1710400737442-0c8b55ce7012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: 'Boa foto',
        },
        {
            id: '2',
            username: 'heeh',
            userImage: "data:image/jpeg;base64,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",
            img: "https://plus.unsplash.com/premium_photo-1710361778821-93aeb8787ccd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: 'Boa foto hehe'
        }
    ];

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;
