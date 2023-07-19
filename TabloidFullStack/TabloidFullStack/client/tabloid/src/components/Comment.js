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
            <td>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</td>
            <td>{post.category.name}</td>
          </tr>
        </tbody>
      </Table>  
    );
}