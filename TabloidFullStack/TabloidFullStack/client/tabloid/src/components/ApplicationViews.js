import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
<<<<<<< HEAD
import { PostList } from "./PostList";
=======
import CategoryList from "./CategoryList";
import Login from "./Login";

>>>>>>> main

import { TagList } from "./Tags/TagList"
export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
<<<<<<< HEAD
        <Route path="/posts" element={<PostList />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
>>>>>>> main
        <Route path ="/tags" element ={<TagList />}/>
      </Routes>
   );
 
}
