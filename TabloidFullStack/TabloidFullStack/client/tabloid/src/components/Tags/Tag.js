import React from "react";
import { Card, CardBody, CardFooter, Button, pop} from "reactstrap";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


export const Tag = ({ tag }) => {

  const navigate = useNavigate()



  return (
      <Card className="m-4">

        <CardBody>

            
              <strong>{tag.name}</strong>
            
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