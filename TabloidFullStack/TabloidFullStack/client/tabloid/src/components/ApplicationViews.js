import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { PostList } from "./PostList";
import CategoryList from "./CategoryList";
import Login from "./Login";


import { TagList } from "./Tags/TagList"
export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path ="/tags" element ={<TagList />}/>
      </Routes>
   );
 
}
