import React from "react";

const baseUrl = '/api/tag'; 


//get all of the Tags
export const getAllTags = () => {
  return fetch(baseUrl)  
    .then((response) => response.json())
};