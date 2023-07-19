import React from "react";
import { Card, CardBody, CardFooter, Button} from "reactstrap";
import { Link } from "react-router-dom";
import { deleteTag } from "../../Managers/TagManager";

export const Tag = ({ tag }) => {

  return (
      <Card className="m-4">

        <CardBody>

            
              <strong>{tag.name}</strong>
            
        <CardFooter><div><Button
       
       className="editButton">
       Edit
   </Button></div>
   
        <div>      
        <Button variant="outlined" align="center" padding={1} onClick={() => deleteTag(tag.id)} >
        Delete
      </Button></div>    
    </CardFooter> 
       
       
        </CardBody>
      </Card>
  )}