import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Alert } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../Managers/PostManager";
import { getAllPostTags} from "../../Managers/PostTagManager";

export const PostDetails = () => {
  const [post, setPost] = useState();
  const [tag, setTag ] = useState();
  const [showAlert, setShowAlert] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const localTabloidUser = localStorage.getItem("userProfile");
  const tabloidUserObject = JSON.parse(localTabloidUser)


  useEffect(() => {
    getPostById(id).then(setPost)
    getAllPostTags(id).then(setTag);
       


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

  //State is used to show the alert or not. We change state when the button is clicked to false to get rid of the alert
  const handleCancel = () => {
    setShowAlert(false) 
  }

  //I had to put the alert into a function in order to use bootstraps Alert
  const deletePostAlert = () => {
    return (<>
    <Alert color="danger" key={'danger'}>
      Are you sure you want to delete this post???
      <br></br><Link onClick={handleDelete}>Yes</Link> / <Link onClick={handleCancel}>No</Link>
    </Alert>
    </>)
  }

  //Delete button only shows for the user
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

  //Edit button only shows for the user
  const editPostButtonForUser = () => {
    if (post.userProfileId === tabloidUserObject.id) {
      return <>
      <Button color="warning" onClick={() => navigate(`/posts/edit/${post.id}`)}>Edit</Button>
      </>
  }}

  return (
    <Card>
        <CardTitle><b>{post.title}</b></CardTitle>
        <CardImg top src={post.imageLocation} alt="iMAgE Is bROkeN..." />
        <CardBody>
            <CardText>{post.content}</CardText>
            <CardText>
                Posted on {post.createDateTime} by <b>{post?.userProfile?.displayName}</b>
                <div>
                Tag: {post.tags.map((tag) => <p>{tag.name}</p>)} 
              </div>
            </CardText>
            <Button onClick={() => navigate(`/commentsbyId/${post.id}`)}>View Comments</Button>
            <Button onClick={() => navigate(`/addComment/${post.id}`)}>Add Comment</Button>
         
            < Button onClick={(addtag) => {
            navigate(`/addTag/${id}`)
          }} 
          >Manage Tags</Button>
            {deleteButtonForUser()}
            {editPostButtonForUser()}

        </CardBody>
    </Card>
  );
};
