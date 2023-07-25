import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { PostList } from "./Posts/PostList";
import CategoryList from "./Categories/CategoryList";
import Login from "./Login";
import { TagList } from "./Tags/TagList"
import { AddTag } from "./Tags/TagCreate";
import CategoryForm from "./Categories/CategoryForm";
import { UserPosts } from "./Posts/UserPosts";
import { EditCategory } from "./Categories/EditCategory";
import { PostDetails } from "./Posts/PostDetails";
import { EditTag } from "./Tags/TagEdit";
import { DeleteTag } from "./Tags/TagDelete";
import { CommentList } from "./CommentList.js";
import { PostForm } from "./Posts/PostForm";
import {PostTags }from "./Tags/PostTag";
import { DeleteCategory } from "./Categories/DeleteCategory";
import { PostEdit } from "./Posts/PostEdit";
import { UserProfileList } from "./userProfiles/UserProfileList";
import { UserProfileDetails } from "./userProfiles/UserProfileDetails";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/add" element={<PostForm />} />
        <Route path="/posts/edit/:postId" element={<PostEdit />} />
        <Route path="/myPosts" element={<UserPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/edit/:categoryId" element={<EditCategory />} />
        <Route path="/category/delete/:categoryId" element={<DeleteCategory />} />
        <Route path ="/tags" element ={<TagList />}/>
        <Route path="/tags/newtag" element={<AddTag/>} />
        <Route path = "/commentsbyId/:postId" element={<CommentList/>} />
        <Route path="/tags/edit/:tagId" element={<EditTag/>} />
        <Route path="/tags/delete/:tagId" element={<DeleteTag/>} />
        <Route path="/addtag/:id" element={<PostTags />} />
        <Route path="/users" element={<UserProfileList />} />
        <Route path="/userprofiles/:userProfileId" element={<UserProfileDetails />} />

      </Routes>
   );
 
}
