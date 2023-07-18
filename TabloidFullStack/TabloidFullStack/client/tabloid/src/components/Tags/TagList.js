import React, { useEffect, useState } from "react";
import { getAllTags} from "../../Managers/TagManager";
import {Tag } from "./Tag"


export const TagList = () => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    getAllTags().then(tag => {
        console.log("tags", tag)
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
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

