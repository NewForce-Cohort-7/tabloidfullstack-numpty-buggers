import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../Managers/PostManager";

export const PostDetails = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPostById(id).then(setPost);
  }, []);

  if (!post) {
    return null;
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
        </CardBody>
    </Card>
  );
};






