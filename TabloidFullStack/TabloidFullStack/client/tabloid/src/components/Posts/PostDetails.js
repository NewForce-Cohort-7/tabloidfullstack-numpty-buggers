import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Alert } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../Managers/PostManager";

export const PostDetails = () => {
  const [post, setPost] = useState();
  const [showAlert, setShowAlert] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const localTabloidUser = localStorage.getItem("userProfile");
  const tabloidUserObject = JSON.parse(localTabloidUser)


  useEffect(() => {
    getPostById(id).then(setPost)
  }, [])

  if (!post) {
    return null;
  }
  
  // const getCommentsForId = () => {
  //   navigate(`/commentsbyId/${postId}`)
  // }

  const handleDelete = () => {
    deletePost(post.id).then(() => {
      setShowAlert(false)
      navigate(`/posts`)
    });
  };

  const handleCancel = () => {
    setShowAlert(false) 
  }

  const deletePostAlert = () => {
    return (<>
    <Alert color="danger" key={'danger'}>
      Are you sure you want to delete this post???
      <br></br><Link onClick={handleDelete}>Yes</Link> / <Link onClick={handleCancel}>No</Link>
    </Alert>
    </>)
  }

  const deleteButtonForUser = () => {
    if (post.userProfileId === tabloidUserObject.id) {
      return <><Button
      color="danger"
      type="delete"
      onClick={() => {
        setShowAlert(true);      
      }}> 
      Delete
    </Button>
      {showAlert && deletePostAlert()}
      </>
    }
  }
  const editPostButtonForUser = () => {
    if (post.userProfileId === tabloidUserObject.id) {
      return <>
      <Button color="warning" onClick={() => navigate(`/posts/edit/${post.id}`)}>Edit</Button>
      </>
  }

  }

  return (
    <Card>
        <CardTitle><b>{post.title}</b></CardTitle>
        <CardImg top src={post.imageLocation} alt="iMAgE Is bROkeN..." />
        <CardBody>
            <CardText>{post.content}</CardText>
            <CardText>
                Posted on {post.createDateTime} by <b>{post?.userProfile?.displayName}</b>
            </CardText>
            <Button onClick={() => navigate(`/commentsbyId/${post.id}`)}>View Comments</Button>
            {deleteButtonForUser()}
            {editPostButtonForUser()}

        </CardBody>
    </Card>
  );
};
