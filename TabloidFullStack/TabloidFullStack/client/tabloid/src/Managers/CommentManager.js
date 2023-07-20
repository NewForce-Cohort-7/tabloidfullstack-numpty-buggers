
const baseUrl = "/api/Comment";

export const GetPostcommentsbyId = (postId) => {
    return fetch(`${baseUrl}/GetCommentsByPostId?id=${postId}`)
    .then((res) => res.json())
};
