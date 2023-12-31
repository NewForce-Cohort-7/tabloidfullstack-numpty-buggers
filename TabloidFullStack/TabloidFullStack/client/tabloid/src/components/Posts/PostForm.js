import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {addPost} from "../../Managers/PostManager"
import {getAllCategories} from "../../Managers/CategoryManager"

export const PostForm = () => {
    const navigate = useNavigate()
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const [categories, setCategories] = useState([])

    //Since categories isn't a property of post we have to fetch them so we can select one
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
        createDateTime: Date.now(),
        publishDateTime: Date.now(),
        isApproved: true,
        categoryId: 0,
        userProfileId: tabloidUserObject.id
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const postToSendToAPI = {
            Title: post.title,
            Content: post.content,
            ImageLocation: post.imageLocation,
            //toISOString is essential in order to get the correct syntax inserted into the database
            CreateDateTime: new Date().toISOString(),
            PublishDateTime: new Date().toISOString(),
            IsApproved: true,
            CategoryId: post.categoryId,
            UserProfileId: tabloidUserObject.id
        }

        return addPost(postToSendToAPI).then(navigate(`/posts`))
    }

    //I've found this method to be very useful when needing to select an item then add it to the database
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
                        {/* Select that category from the list!! */}
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
