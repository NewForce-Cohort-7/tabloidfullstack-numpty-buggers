import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById, deleteCategory } from "../../Managers/CategoryManager";
import { Button } from "reactstrap";

export const DeleteCategory = () => {
    const [category, update] = useState({
        name: "",
    })

    const { categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategoryById(categoryId)
            .then((categoryArray) => {
                update(categoryArray)
            })
    }, [categoryId])

    const handleDelete = (event) => {
        event.preventDefault()
        deleteCategory(category.id)
            .then(() => {
                navigate("/category")
            })
    }

    const handleNo = () => {
        navigate("/category")
    }

    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">Delete Category</h2>

            <h3>Are you sure you want to delete {category.name}?</h3>

            <Button
                color="danger"
                type="delete"
                onClick={(clickEvent) => handleDelete(clickEvent)}
                >
                    Yes
                </Button>
            <Button
                color="primary"
                onClick={(clickEvent) => handleNo(clickEvent)}
                >
                    No
                </Button>
        </form>
    )
}