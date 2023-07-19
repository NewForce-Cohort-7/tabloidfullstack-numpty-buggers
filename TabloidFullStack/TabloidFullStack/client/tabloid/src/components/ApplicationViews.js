import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { PostList } from "./PostList";
import CategoryList from "./CategoryList";
import Login from "./Login";
import { TagList } from "./Tags/TagList"
import { AddTag } from "./Tags/TagCreate";
import CategoryForm from "./CategoryForm";


export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path ="/tags" element ={<TagList />}/>
        <Route path="/tags/newtag" element={<AddTag/>} />
        <Route path = "/commentsbyId" element={<Comment/>} />

      </Routes>
   );
 
}
