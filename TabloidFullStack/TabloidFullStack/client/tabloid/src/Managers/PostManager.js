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

export const addPost = (singlePost) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePost)
    });
};