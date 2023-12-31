//This component is responsible for showing how the list of categories will appear in the front end

import React from "react";
import { Card, CardBody } from "reactstrap";

const Category = ({ category }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Title</p>
            <CardBody>
                <p>
                    <strong>{category.name}</strong>
                </p>
            </CardBody>
        </Card>
    );
};

export default Category;