//THESE URL'S MUST MATCH EXACTLY HOW THEY SHOW IN SWAGGER (ie BACKEND)
const baseUrl = '/api/post';

//Fetching every single post in the database
export const getAllPosts = () => {
    return fetch(baseUrl).then((res) => res.json())
};

//Fetching only posts made by the user in the database. The "id" parameter is essential because we connect this with the user's id through localStorage
export const getPostsByUserId = (id) => {
    return fetch(`${baseUrl}/GetUsersPosts/${id}`).then((res) => res.json())
}

export const getPostById = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json())
}

//POST fetch to add a post to the database
export const addPost = (singlePost) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePost)
    });
}

//DELETE fetch with an id parameter to delete the post by its Id. In SQL I did a cascade delete to also delete each comment associated with that post. The SQL query is commented out under the delete method in PostRepository.cs
export const deletePost = (id) => {
    return fetch(`/api/post/${id}`, {
      method: "DELETE",
    })
      .then(() => getAllPosts())
  };

//PUT fetch to edit the individual post. Selecting it by it's id
  export const editPost = (post) => {
    console.log(post)
    return fetch(`/api/post/${post.Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then(() => getAllPosts())
}
