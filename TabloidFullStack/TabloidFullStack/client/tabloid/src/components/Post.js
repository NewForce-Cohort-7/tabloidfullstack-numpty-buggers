import React from "react";
import { Card, CardImg, CardBody, Table } from "reactstrap";
import { getAllComments } from "../Managers/CommentManager";

export const Post = ({ post }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
          <td>{post.category.name}</td>
          <Button OnClick={getAllComments}/>
        </tr>
      </tbody>
    </Table>
  );
};
