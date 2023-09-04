import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserProfileById } from "../../Managers/UserProfileManager";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button, Container, Row, Col } from "reactstrap";

export const UserProfileDetails = () => {
    const { userProfileId } = useParams();
    const [userProfile, setUserProfile] = useState({});
    const navigate = useNavigate();

    // Returns the user with the ID requested. Console logged to make sure the useEffect was working properly.
    useEffect(() => {
        getUserProfileById(userProfileId)
            .then(userProfileFromAPI => {
                setUserProfile(userProfileFromAPI);
                console.log(userProfileFromAPI)
            });
    }, []);


    //GIF returns where the profile picture would be, in case the user is not found or the app is returning the ID as 'undefined'
    return (
        <Container>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Card className="m-auto">
                        <CardImg top width="100%" src={userProfile.imageLocation || 'https://media.tenor.com/EYUlar2QIe4AAAAd/plink.gif'} alt="Profile-pic" />
                        <CardBody>
                            <CardTitle tag="h4">{userProfile.displayName}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2">Email: {userProfile.email}</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2">Full Name: {userProfile.firstName} {userProfile.lastName}</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2">User Type: {userProfile.userType?.name}</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2">Creation Date: {
                                new Date(userProfile.createDateTime).toLocaleDateString('en-US')
                            }</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}