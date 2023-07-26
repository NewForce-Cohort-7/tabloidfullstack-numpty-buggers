import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUserProfile, getUserProfileById } from "../../Managers/UserProfileManager";
import { Form, FormGroup, Card, CardBody, Label, Button } from "reactstrap";

export const EditUserProfile = () => {
    const [userProfile, update] = useState({
        userTypeId: "",
    });

    const navigate = useNavigate();

    const { userProfileId } = useParams();

    useEffect(() => {
        getUserProfileById(userProfileId)
        .then((userProfileArray) => {
            update(userProfileArray)
        })
    }, []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        editUserProfile(userProfile)
        .then(() => {
            navigate("/users")
        })
    }

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="userTypeId">Change User Type</Label>
                                <select
                                required autoFocus
                                    value={userProfile}
                                    onChange={
                                        (event) => {
                                            const copy = {...userProfile}
                                            copy.name = event.target.value
                                            update(copy)
                                        }
                                    }
                                >
                                    <option value={1}>Admin</option>
                                    <option value={2}>Author</option>
                                </select>    
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