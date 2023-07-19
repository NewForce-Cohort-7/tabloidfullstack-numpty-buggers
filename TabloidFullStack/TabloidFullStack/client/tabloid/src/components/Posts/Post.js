import React from "react";
<<<<<<< HEAD:TabloidFullStack/TabloidFullStack/client/tabloid/src/components/Post.js
import { Card, CardImg, CardBody, Table } from "reactstrap";
import { getAllComments } from "../Managers/CommentManager";
import { useNavigate } from "react-router";
import { Button } from "bootstrap";
=======
>>>>>>> main:TabloidFullStack/TabloidFullStack/client/tabloid/src/components/Posts/Post.js

//This function is in charge of the contents of each individual post. It uses the prop "post" to get state from PostList.js or UserPosts.js
export const Post = ({ post }) => {
  const navigate = useNavigate();

  const getCommentsForId = (e) => {
    navigate("/Comment/GetCommentsByPostId?")
  }
  return (
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
          <td>{post.category.name}</td>
          <Button OnClick={getCommentsForId}>View Comments</Button>
        </tr>
      </tbody>
  );
};
