const baseUrl = '/api/PostTag';
const apiUrl = "https://localhost:5001"

//add a postTag to a post
export const addPostTag = (singlePostTag) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePostTag),
    });
};

//get all of the postTags on a post
export const getAllPostTags = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then((res) => res.json())
};