import { Table } from "reactstrap";

export const Comment = ({comment}) => {
    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Content</th>
            <th>Subject</th>
            <th>Author</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{comment.Content}</td>
            <td>{comment.Subject}</td>
            <td>{comment.UserProfileId}</td>
            <td>{comment.CreateDateTime}</td>
          </tr>
        </tbody>
      </Table>  
    );
}