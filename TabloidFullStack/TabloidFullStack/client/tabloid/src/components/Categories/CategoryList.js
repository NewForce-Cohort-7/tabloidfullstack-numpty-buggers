//This component is responsible for returning the list of categories to be viewed on the front end

import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../Managers/CategoryManager";
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

    //Clicking the button associated with this function will allow the user to move to the create page for Categories
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
              onClick={() => navigate(`/category/delete/${category.id}`)}
              >
                Delete
              </Button>
            <Button
            color="warning"
            type="edit"
            onClick={() => navigate(`/category/edit/${category.id}`)}
            >
              Edit
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
    
    export default CategoryList; //To be exported to ApplicationViews