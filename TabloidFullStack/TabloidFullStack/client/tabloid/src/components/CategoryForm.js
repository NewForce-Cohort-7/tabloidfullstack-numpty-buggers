import React, {useState, useContext } from "react";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../Managers/CategoryManager";

export const CategoryForm = () => {
    const { addCategory } = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const submit = (e) => {
        const category = {
            name
        };

        addCategory(category).then((p) => {
            navigate("/");
        });
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
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default CategoryForm;