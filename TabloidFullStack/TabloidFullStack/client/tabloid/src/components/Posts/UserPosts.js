import { useEffect, useState } from "react";
import { getPostsByUserId } from "../../Managers/PostManager";
import { Post } from "./Post";
import { Table } from "reactstrap";

export const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([])

    //We are able to get the current user by accessing local storage. The user is defined "userProfile on line 12 of App.js"
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)

    useEffect(() => {
        getPostsByUserId(tabloidUserObject.id)
            .then((data) => {
                setUserPosts(data)
            })
            .catch((error) => {
                console.log("Error fetching your posts...", error)
            })
    }, [tabloidUserObject.id])

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
            {userPosts.map((post) => {
              return  <Post key={post.id} post={post} />
            })}
            </Table>
          </div>
        </div>
      </div>

    </>)
}