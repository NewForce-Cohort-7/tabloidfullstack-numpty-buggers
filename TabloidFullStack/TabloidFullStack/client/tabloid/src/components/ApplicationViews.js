import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { PostList } from "./Posts/PostList";
import CategoryList from "./CategoryList";
import Login from "./Login";
import { TagList } from "./Tags/TagList"
import { AddTag } from "./Tags/TagCreate";
import CategoryForm from "./CategoryForm";
import { UserPosts } from "./Posts/UserPosts";
import { EditCategory } from "./EditCategory";
import { PostDetails } from "./Posts/PostDetails";
import { EditTag } from "./Tags/TagEdit";
import { DeleteTag } from "./Tags/TagDelete";
import { CommentList } from "./CommentList.js";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/myPosts" element={<UserPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/edit/:categoryId" element={<EditCategory />} />
        <Route path ="/tags" element ={<TagList />}/>
        <Route path="/tags/newtag" element={<AddTag/>} />
        <Route path = "/commentsbyId/:postId" element={<CommentList/>} />
        <Route path="/tags/edit/:tagId" element={<EditTag/>} />
        <Route path="/tags/delete/:tagId" element={<DeleteTag/>} />

      </Routes>
   );
 
}
