import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { addTag} from "../../Managers/TagManager";
import { Button } from "reactstrap";


export const AddTag = () => {
  const [tag, update] = useState({
   name: "",
  
})
const navigate = useNavigate()
const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const tagToAPI = {
            Name: tag.name,
            
        };
    return addTag(tagToAPI)
        .then(navigate("/tags"));
};



  return (
    <form className="tagForm">
        <h2 className="tagForm__title">New Tag</h2>
        <fieldset>
            <div className="form-group">
                
                <label htmlFor="name">Name of Tag:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="what is your tag?"
                    value={tag.name}
                    onChange={ 
                        (event) => {
                        const copy = {...tag}
                        copy.name = event.target.value 
                        update(copy)
                    } 
                }
               />
            </div>
        </fieldset>
                
        <Button 
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
           Save
        </Button>
    </form>
  )
}