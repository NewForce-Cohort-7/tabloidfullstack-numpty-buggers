import React from "react";
import { Card, CardImg, CardBody, Table } from "reactstrap";
import { getAllComments } from "../Managers/CommentManager";
import { useNavigate } from "react-router";
import { Button } from "bootstrap";

export const Post = ({ post }) => {
  const navigate = useNavigate();

  const getCommentsForId = (e) => {
    navigate("/Comment/GetCommentsByPostId?")
  }
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
          <Button OnClick={getCommentsForId}>View Comments</Button>
        </tr>
      </tbody>
    </Table>
  );
};
