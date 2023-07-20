import React, { useState, useEffect } from "react";
import { useNavigate , useParams} from "react-router-dom"
import { getTagById, deleteTag} from "../../Managers/TagManager";
import { Button } from "reactstrap";


export const DeleteTag = () => {
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


const handleDelete = () => {
  deleteTag(tag.id)
      .then(() => {
          navigate("/tags")
      })
}

//option to cancel delete
const handleNo = () => {
  navigate(`/tags`)
}




  return (
    <form className="tagForm">
        <h2 className="tagForm__title">Delete Tag</h2>
        
        <h3>Are you sure you want delete {tag.name}?</h3>
                
        <Button 
        onClick={(clickEvent) => handleDelete(clickEvent)}
            className="btn btn-primary">
           yes
        </Button>
        <Button 
        onClick={(clickEvent) => handleNo(clickEvent)}
            className="btn btn-primary">
           no
        </Button>
    </form>
  )
}