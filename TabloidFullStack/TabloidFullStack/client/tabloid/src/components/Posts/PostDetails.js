import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../Managers/PostManager";
import { useNavigate } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../Managers/PostManager";

export const PostDetails = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then(setPost);
  }, []);

  if (!post) {
    return null;
  }
  
  const getCommentsForId = (e) => {
    navigate("/commentsbyId")
  }

  return (
    <Card>
        <CardTitle>Title: <b>{post.title}</b></CardTitle>
        <CardImg top src={post.imageLocation} alt="iMAgE Is bROkeN..." />
        <CardBody>
            <CardText>{post.content}</CardText>
            <CardText>
                Posted on {post.createDateTime} by <b>{post?.userProfile?.displayName}</b>
            </CardText>
            <Button onClick={getCommentsForId}>View Comments</Button>
            <Button
              color="danger"
              type="delete"
              onClick={() => {
                console.log("Delete button clicked");
                deletePost(post.id).then(navigate(`/posts`))
              }
                
              }
            > 
              Delete
            </Button>

        </CardBody>
    </Card>
  );
};
