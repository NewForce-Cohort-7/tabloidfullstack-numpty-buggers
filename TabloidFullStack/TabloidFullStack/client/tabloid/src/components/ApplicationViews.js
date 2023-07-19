import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import Login from "./Login";
import { TagList } from "./Tags/TagList"
import CategoryForm from "./CategoryForm";


export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path ="/tags" element ={<TagList />}/>
      </Routes>
   );
 
}
