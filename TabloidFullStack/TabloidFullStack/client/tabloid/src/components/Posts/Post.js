import React from "react";

//This function is in charge of the contents of each individual post. It uses the prop "post" to get state from PostList.js or UserPosts.js
export const Post = ({ post }) => {
  return (
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
          <td>{post.category.name}</td>
        </tr>
      </tbody>
  );
};
