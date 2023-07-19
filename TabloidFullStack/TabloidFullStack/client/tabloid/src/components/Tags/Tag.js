import React from "react";
import { Card, CardBody, CardFooter, Button} from "reactstrap";
import { Link } from "react-router-dom";


export const Tag = ({ tag }) => {

  return (
      <Card className="m-4">

        <CardBody>
          <p>
            
              <strong>{tag.name}</strong>
            
        <CardFooter><div><Button
       
       className="btn btn-primary">
       Edit
   </Button></div>
   
        <div> <Button
       
       className="btn btn-primary">
       Delete
   </Button></div>    
    </CardFooter> 
       
          </p>
        </CardBody>
      </Card>
  )}