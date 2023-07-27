import { useEffect, useState } from "react"
import { getAllPosts } from "../../Managers/PostManager";
import { Post } from "./Post";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const PostList = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);

    //getting all the posts so they can be displayed
    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    }

    useEffect(() => {
        getPosts();
    }, [])

    const create = () => {
      navigate("/posts/add")
    }
    //The Table is put here while the contents are in Post.js. This way the header doesn't pop up for each post
    return (<>
      <div className="post-list">
        <div className="row justify-content-center">
          <div className="cards-column">
          <div>
            <Button color="info" onClick={create}>
              Create New
            </Button>
          </div>
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



 