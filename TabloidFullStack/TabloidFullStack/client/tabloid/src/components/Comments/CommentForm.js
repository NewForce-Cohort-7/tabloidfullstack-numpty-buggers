import { useState } from "react"
import { useNavigate } from "react-router"
import { addComment } from "../../Managers/CommentManager.js"
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";


export const CommentForm = ({postId}) => {
    const navigate = useNavigate()
    const localTabloidUser = localStorage.getItem("userProfile")
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset();
    const timezoneOffset = offset * 60 * 1000;
    const correctedDate = new Date(currentDate.getTime() - timezoneOffset)

    const [comment, update] = useState({
        PostId: postId, 
        UserProfileId: tabloidUserObject.id,
        Subject: "",
        Content: "",
        CreateDateTime: correctedDate.toISOString()
    })

    const handleSaveButtonClick = (event) =>  {
        event.preventDefault()

        const commentToAPI = {
            PostId: postId,
            UserProfileId: tabloidUserObject.id,
            Subject: comment.subject,
            Content: comment.content,
            CreateDateTime: correctedDate.toISOString()
        }
        console.log(postId)
        addComment(commentToAPI)
        .then(() => {
            if (postId) {
                navigate(`/comments/${postId}`);
            }
        });    }
    return (
        <div className="comment-form">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="subject">Comment Subject</Label>
                                <Input
                                    required autoFocus
                                    type="text"
                                    className="comment-input"
                                    placeholder="Enter the sbject of your comment here"
                                    value={comment.subject}
                                    onChange={
                                        (event) => {
                                            const copy = {...comment}
                                            copy.subject = event.target.value
                                            update(copy)
                                        }
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="content">Comment Content</Label>
                                <Input
                                    required autoFocus
                                    type="text"
                                    className="form"
                                    placeholder="Write Comment here"
                                    value={comment.content}
                                    onChange={
                                        (event) => {
                                            const copy = {...comment}
                                            copy.content = event.target.value
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
}