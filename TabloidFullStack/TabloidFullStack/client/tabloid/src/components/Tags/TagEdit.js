import React, { useState, useEffect } from "react";
import { useNavigate , useParams} from "react-router-dom"
import { getTagById, updateTag} from "../../Managers/TagManager";
import { Button } from "reactstrap";


export const EditTag = () => {
  const [tag, update] = useState({
   name: "",
  
})

const { tagId } = useParams();
const navigate = useNavigate()


useEffect(() => {
  getTagById(tagId) //route param
        .then((tagArray)=>
      {
            update(tagArray) 
        })
}, [tagId]) //watch state - param

const handleSaveButtonClick = (event) => {
  event.preventDefault()
updateTag(tag)
.then(() => {
    navigate ("/tags")
})
}


  return (
    <form className="tagForm">
        <h2 className="tagForm__title">Edit Tag</h2>
        <fieldset>
            <div className="form-group">
                
                <label htmlFor="name">Name of Tag:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
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