import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllCategories = () => {
    return fetch(`${apiUrl}/api/category`)
    .then((res) => res.json())
};

export const addCategory = (singleCategory) => {
    return fetch (apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};
