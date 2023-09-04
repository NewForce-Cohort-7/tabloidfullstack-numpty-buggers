import React, { useEffect, useState } from "react";
import { getAllTags} from "../../Managers/TagManager";
import {TagAndButton } from "./Tag"
import { Button } from "reactstrap";


export const TagList = () => {
  const [tag, setTags] = useState([]);

  const getTags = () => {
    getAllTags().then(tag => {

        setTags(tag)
    }); 
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
            <h2>Tag List</h2>
            <Button href="tags/newtag"variant="contained">Add a Tag</Button>

          {tag.map((tag) => (
            <TagAndButton key={tag.id} tag={tag} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

