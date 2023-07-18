import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Tag = ({ tag }) => {

  return (
      <Card className="m-4">

        <CardBody>
          <p>
            
              <strong>{tag.name}</strong>
     
          </p>
        </CardBody>
      </Card>
  )}