import { useEffect, useState } from "react"
import { getAllPosts } from "../../Managers/PostManager";
import { Post } from "./Post";
import { Table } from "reactstrap";

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    }

    useEffect(() => {
        getPosts();
    }, [])

    //The Table is put here while the contents are in Post.js. This way the header doesn't pop up for each post
    return (<>
      <div className="post-list">
        <div className="row justify-content-center">
          <div className="cards-column">
            <Table> 
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
              </tr>
            </thead>
              {posts.map((post) => {
                // console.log(post)
                return  <Post key={post.id} post={post} />
              })}
            </Table>
          </div>
        </div>
      </div>
    
    </>
    )
}



 