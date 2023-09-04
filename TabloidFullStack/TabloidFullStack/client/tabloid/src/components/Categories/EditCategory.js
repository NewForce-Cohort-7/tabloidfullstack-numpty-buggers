// This component is responsible for making sure that the user is able to edit a category in the database from the front end

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, getCategoryById } from "../../Managers/CategoryManager";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";

export const EditCategory = () => {
    const [category, update] = useState({
        name: "",
    });

    const navigate = useNavigate();

    const { categoryId } = useParams();

    useEffect(() => {
        getCategoryById(categoryId)
        .then((categoryArray) => {
            update(categoryArray)
        })
    }, []);

    // This function is responsible for making sure the change made to the category is saved
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        editCategory(category)
        .then(() => {
            navigate("/category")
        })
    }

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Edit Category Name</Label>
                                <Input
                                    required autoFocus
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a new name for your category"
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
                            SAVE
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}