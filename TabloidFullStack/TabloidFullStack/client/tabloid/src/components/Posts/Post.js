import React from "react";
import { Link } from "react-router-dom";

//This function is in charge of the contents of each individual post. It uses the prop "post" to get state from PostList.js or UserPosts.js depending which page the user is on. The prop is named the same in both modules.
export const Post = ({ post }) => {

  return (
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
          <td>{post.category.name}</td>
          <td><Link to={`/posts/${post.id}`}>Details</Link></td>
        </tr>
      </tbody>
  );
};
