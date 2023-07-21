const baseUrl = 'api/PostTag';


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
    return fetch(`baseUrl/PostTag/${id}`)
        .then((res) => res.json())
};