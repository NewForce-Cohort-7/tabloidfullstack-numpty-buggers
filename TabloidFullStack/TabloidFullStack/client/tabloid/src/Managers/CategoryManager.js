import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllCategories = () => {
    return fetch("/api/category")
    .then((res) => res.json())
};

export const getCategoryById = (id) => {
    return fetch(`${apiUrl}/api/category/${id}`).then((r) => r.json());
}

export const addCategory = (singleCategory) => {
    return fetch ("/api/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};

export const deleteCategory = (id) => {
    return fetch (`/api/category/${id}`, {
        method: "DELETE",
    })
};

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
