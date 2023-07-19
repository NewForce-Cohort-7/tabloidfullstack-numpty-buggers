import React, { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../Managers/CategoryManager";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    };

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, []);

    const create = (e) => {
      navigate("/category/add")
    }

    return (  
        <><div>
        {categories.map((category) => (
          <div key={category.id}>
            <p>
              <strong>{category.name}</strong>
            </p>
            <Button
              color="danger"
              type="delete"
              onClick={() => 
                deleteCategory(category.id).then((categories) => {
                  setCategories(categories);
                })
              }
            > 
              Delete
            </Button>
          </div>
        ))}
      </div>
      <div>
          <Button color="info" onClick={create}>
            Create Category
          </Button>
        </div></>
      );
    };
    
    export default CategoryList;