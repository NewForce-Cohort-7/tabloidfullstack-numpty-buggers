import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfileById, updateUserType, getAllUserTypes } from "../../Managers/UserProfileManager";
import { Form, FormGroup, Card, CardBody, Label, Button, Input } from "reactstrap";

export const EditUserProfile = () => {
    const [userProfile, update] = useState({});
    const [userTypes, setUserTypes] = useState([]);
    const navigate = useNavigate();
    const { userProfileId } = useParams();

    useEffect(() => {
        getUserProfileById(userProfileId)
        .then(update);

        getAllUserTypes().then(setUserTypes);
    }, []);

    const handleFieldChange = (event) => {
        const stateToChange = { ...userProfile };
        stateToChange[event.target.id] = event.target.value
        update(stateToChange)
    }

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        updateUserType(userProfileId, userProfile.userTypeId)
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
                                <Input
                                    type="select"
                                    id="userTypeId"
                                    onChange={handleFieldChange}
                                    value={userProfile.userTypeId}
                                >
                                    {userTypes.map(type => 
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    )}
                                    </Input>   
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