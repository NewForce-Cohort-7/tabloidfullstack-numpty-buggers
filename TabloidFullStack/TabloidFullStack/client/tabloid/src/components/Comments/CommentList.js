import { useEffect, useState } from "react";
import  {GetPostcommentsbyId}  from "../../Managers/CommentManager";
import { Table } from "reactstrap";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";

export const CommentList = () => {
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    const getcomments = () => {
        GetPostcommentsbyId(postId).then((allComments) => setComments(allComments));
    };

    useEffect(() => {
        getcomments();
    }, [postId]);


    return (<>
        <div className="comment-list">
          <div className="row justify-content-center">
            <div className="cards-column">
              <Table> 
              <thead>
                <tr>
                  {/* <th>Content</th>
                  <th>Subject</th>
                  <th>Author</th>
                  <th>Creation Date</th> */}
                </tr>
              </thead>
                {comments.map((comment) => {
                   return <Comment key={comment.id} comment={comment} />
                })}
              </Table>
            </div>
          </div>
        </div>
      
      </>
      )
  }
