import React from "react";
import {useState} from "react";

//Tag API Manager CRUD functionality & Search


const baseUrl = '/api/tag'; 



//get all of the Tags
export const getAllTags = () => {
  return fetch(baseUrl)  
    .then((response) => response.json())
};

// get a Tag by Id
export const getTagById = (id) => {
  return fetch(`/api/Tag/${id}`)
  .then((response) => response.json());
}



//add a Tag to the database
export const addTag = (singleTag) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleTag),
  });
};

//edit a Tag
export const updateTag= (tag) => {
return fetch(`/api/Tag/${tag.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  }).then(getAllTags);
};

//delete a Tag
export const deleteTag = (id) => {
  return fetch(baseUrl + "/" + id, {
     method: "DELETE",
  })
};