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
            <td>{comment.content}</td>
            <td>{comment.subject}</td>
            <td>{comment.userProfileId}</td>
            <td>{comment.createDateTime}</td>
          </tr>
        </tbody>
      </Table>  
    );
}