import React from "react"
import { Card, CardImg, CardBody, Table } from "reactstrap"

export const Post = ( {post} ) => {
    return(<>
    {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
    <p>
        {
            console.log(post.Title)
        }
        hamburger
    </p>
    
    </>)
}