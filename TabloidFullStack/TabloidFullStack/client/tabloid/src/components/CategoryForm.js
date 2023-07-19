import React, {useState, useContext } from "react";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../Managers/CategoryManager";

export const CategoryForm = () => {
    const [category, update] = useState({
        name: "",
    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const categoryToAPI = {
            Name: category.name,
        };
        return addCategory(categoryToAPI)
        .then(navigate("/category"));
    };

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Category Name</Label>
                                <Input
                                    required autoFocus
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the name of your category here"
                                    value={category.name}
                                    onChange={
                                        (event) => {
                                            const copy = {...category}
                                            copy.name = event.target.value
                                            update(copy)
                                        }
                                    }
                                />
                            </FormGroup>
                        </Form>
                        <Button color="info" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
                            SUBMIT
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default CategoryForm;