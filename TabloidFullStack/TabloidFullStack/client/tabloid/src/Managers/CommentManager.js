
const baseUrl = "/api/Comment";

export const GetPostcommentsbyId = (postId) => {
    return fetch(`${baseUrl}/GetCommentsByPostId?postId=${postId}`)
    .then((res) => res.json())
};
