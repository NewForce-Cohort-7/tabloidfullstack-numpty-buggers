import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";

//This function is in charge of the contents of each individual post. It uses the prop "post" to get state from PostList.js or UserPosts.js
export const Post = ({ post }) => {
  const navigate = useNavigate();

  const getCommentsForId = (e) => {
    navigate("/commentsbyId")
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
