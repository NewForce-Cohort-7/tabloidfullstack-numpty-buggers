import { useEffect, useState } from "react"
import { getAllPosts } from "../Managers/PostManager";
import { Post } from "./Post";


export const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (<>
      <div className="post-list">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => {
                // console.log(post.title)
                return  <Post key={post.id} post={post} />
            })}
          </div>
        </div>
      </div>
    
    </>
    )
}



 