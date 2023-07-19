import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../Managers/PostManager";

export const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPostById(id).then(setPost)
    },[])

    if (!post) {
        return null;
    }

  return (<>
    <Card className="m-4">
      <p>{post.title}</p>
      <CardImg top src={post.imageLocation} alt={post.title} />
      <CardBody>
        {/* <p><strong>{post.title}</strong></p> */}
        {/* <p>{post.caption}</p> */}
      </CardBody>
    </Card>
    <div>oasdjfojadjf</div>
  </>
  );
};