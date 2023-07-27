import {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {editPost, getPostById} from "../../Managers/PostManager"
import {getAllCategories} from "../../Managers/CategoryManager"

//SEE POSTFORM FOR SIMILAR CODE AND EXPLANATION
//Notice that useParams is crucial for our edit. This is how we get the data for the specific post we are on as well as PUT to the database, overriding the old information with our newly updated inputs
export const PostEdit = () => {
    const navigate = useNavigate()
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const { postId } = useParams();
    const [categories, setCategories] = useState([])
    
    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    }
    
    useEffect(() => {
        getCategories()
    }, [])
    
    const [post, update] = useState({
        title: "",
        content: "",
        imageLocation: "",
        userProfileId: tabloidUserObject.id,
        createDateTime: Date.now(),
        publishDateTime: Date.now(),
        isApproved: true,
        categoryId: 0
    })

    useEffect(() => {
        getPostById(postId)
        .then((postArray) => {
            update(postArray)
        })
    }, [postId]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const postToEdit = {
            Id: parseInt(postId),
            Title: post.title,
            Content: post.content,
            ImageLocation: post.imageLocation,
            CreateDateTime: post.createDateTime,
            PublishDatetime: new Date().toISOString(),
            IsApproved: true,
            IsApproved: true,
            CategoryId: post.categoryId,
            UserProfileId: post.userProfileId
        }
        return editPost(postToEdit)
            .then(() => {
                navigate(`/posts`)
            })
    }

    const selectList = (event) => {
        const copy = {
            ...post
        }
        copy.categoryId = event.target.value
        update(copy)
    }

    return (
        <div>
            <form className="postForm">
                <h2 className="postForm">New Post</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="category-select">Category</label>
                        <select id="type"
                            value={
                                post.categoryId
                            }
                            onChange={
                                event => selectList(event)
                        }>
                            <option value="0">Select a category</option>
                            {
                            categories.map(category => {
                                return <option value={category.id} key={
                                    category.id
                                }>
                                    {
                                    category.name
                                }</option>
                        })
                        } </select>  
                        </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className="form-control"
                            value={
                                post.title
                            }
                            onChange={
                                (event) => {
                                    const copy = {
                                        ...post
                                    }
                                    copy.title = event.target.value
                                    update(copy)
                                }
                            }/>
                    </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Content</label>
                    <input id="caption" type="text" className="form-control"
                        value={
                            post.content
                        }
                        onChange={
                            (event) => {
                                const copy = {
                                    ...post
                                }
                                copy.content = event.target.value
                                update(copy)
                            }
                        }/>
                </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="imageUrl">Image</label>
                <input id="imageUrl" type="text" className="form-control"
                    value={
                        post.imageLocation
                    }
                    onChange={
                        (event) => {
                            const copy = {
                                ...post
                            }
                            copy.imageLocation = event.target.value
                            update(copy)
                        }
                    }/>
            </div>
    </fieldset>


    <button className="btn btn-primary"
        onClick={
            (clickEvent) => handleSaveButtonClick(clickEvent)
    }>
        Submit Post</button>
</form></div>
    )


}
