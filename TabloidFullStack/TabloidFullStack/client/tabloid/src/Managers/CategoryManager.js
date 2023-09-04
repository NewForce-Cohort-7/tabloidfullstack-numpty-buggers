import React from "react";

const apiUrl = "https://localhost:5001";

//Returns a list of all categories
export const getAllCategories = () => {
    return fetch("/api/category")
    .then((res) => res.json())
};

//Retrieves a single category
export const getCategoryById = (id) => {
    return fetch(`${apiUrl}/api/category/${id}`).then((r) => r.json());
}

//Allows users to add a category to the database
export const addCategory = (singleCategory) => {
    return fetch ("/api/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};

//Allows users to remove a category from the database
export const deleteCategory = (id) => {
    return fetch (`/api/category/${id}`, {
        method: "DELETE",
    })
};

//Allows users to edit categories in the database
export const editCategory = (category) => {
    return fetch(`/api/category/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
    .then(() => getAllCategories());
}
