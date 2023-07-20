import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../Managers/PostManager";
import { useNavigate } from "react-router-dom";

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
        <CardImg top src={post.ImageLocation} alt="iMAgE Is bROkeN..." />
        <CardBody>
            <CardText>{post.content}</CardText>
            <CardText>
                Posted on {post.createDateTime} by <b>{post?.userProfile?.displayName}</b>
            </CardText>
            <Button onClick={getCommentsForId}>View Comments</Button>
        </CardBody>
    </Card>
  );
};
