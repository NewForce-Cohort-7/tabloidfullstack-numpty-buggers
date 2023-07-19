import React, { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../Managers/CategoryManager";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (  
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <p>
                <strong>{category.name}</strong>
              </p>
            </div>
          ))}
        </div>
      );
    };
    
    export default CategoryList;