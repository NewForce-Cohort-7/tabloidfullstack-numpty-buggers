import React from "react";
import { Card, CardBody, CardFooter, Button, pop} from "reactstrap";
import { Link } from "react-router-dom";
import { deleteTag } from "../../Managers/TagManager";
import { useNavigate } from "react-router-dom";


export const Tag = ({ tag }) => {

  const navigate = useNavigate()

 
  const handleDelete = () => {
    deleteTag(tag.id)
        .then(() => {
            navigate("/")
        })
}

  return (
      <Card className="m-4">

        <CardBody>

            
              <strong>{tag.name}</strong>
            
        <CardFooter><div><Button
       
       className="editButton">
       Edit
   </Button></div>
   
        <div>      
        <Button className="btn btn-primary" onClick={handleDelete}>
        Delete
      </Button></div>    
    </CardFooter> 
       
       
        </CardBody>
      </Card>
  )}