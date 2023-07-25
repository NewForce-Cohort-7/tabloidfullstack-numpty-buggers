import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardLink, Table } from "reactstrap";
import { getPostById } from "../../Managers/PostManager";

import { getAllTags } from "../../Managers/TagManager";
import { TagAndButton } from "../Tags/Tag";


export const PostTags = () => {
//state for posts and tags - watching id
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);
    const { id } = useParams();

    
// get the tags
    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    };
    
   //get the posts
     
   const getPosts = () => {
    getPostById(id).then(singlePost => setPost(singlePost));
  };
    
      useEffect(() => {
        getTags();
        getPosts();
    }, []);

     

    return (
        <div className="m-5">
            <h1>{post.title}</h1>
            
                <CardLink href={`/posts/${id}`}>
                    Go back to post
                </CardLink>
            
            <div className="mx-5 mt-2 mb-5">
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tags
                            </th>
                          
                        </tr>
                    </thead>
                   
                    {tags.map((tag) => (
                        <TagAndButton 
                        tag={tag}
                        post={post}
                         />
                    ))}

                </Table>
            </div>
        </div>)
}
export default PostTags;