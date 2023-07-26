
const baseUrl = "/api/Comment";

export const GetPostcommentsbyId = (postId) => {
    return fetch(`${baseUrl}/GetCommentsByPostId?postId=${postId}`)
    .then((res) => res.json())
};

export const addComment = (CommentObject) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(CommentObject),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to create new Comment")
            }
            return res.json();
        })
    }
