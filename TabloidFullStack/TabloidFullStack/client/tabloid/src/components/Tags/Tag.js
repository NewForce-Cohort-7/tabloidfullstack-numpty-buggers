import React from "react";
import { Card, CardBody, CardFooter, Button, pop} from "reactstrap";
import { Link } from "react-router-dom";
import { addPostTag } from "../../Managers/PostTagManager";
import { useNavigate } from "react-router-dom";


export const TagAndButton = ({ tag, post}) => {

  const navigate = useNavigate()

  const savePostTag = () => {
    // event.preventDefault()
    const newPostTag = {
        postId: post.id,
        tagId: tag.id
    }
    addPostTag(newPostTag).then((tag) => {
      navigate(`/posts/${post.id}`)
        
    });
}

  return (
      <Card className="m-4">

        <CardBody>

            
              <strong>{tag.name}</strong>
              <button className="btn btn-primary" onClick={()=>{ savePostTag() }}>
              Assign Tag
          </button>   
        <CardFooter>
          <Button onClick={() => navigate(`/tags/edit/${tag.id}`)}>
        Edit
      </Button>     
        <div>      
        <Button onClick={() => navigate(`/tags/delete/${tag.id}`)}>
        Delete
      </Button>     </div>    
    </CardFooter> 
       
       
        </CardBody>
      </Card>
  )}
  export default TagAndButton