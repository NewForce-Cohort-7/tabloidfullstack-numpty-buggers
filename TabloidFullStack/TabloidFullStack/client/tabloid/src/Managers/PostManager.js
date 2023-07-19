const baseUrl = '/api/post';

export const getAllPosts = () => {
    return fetch(baseUrl).then((res) => res.json())
};

export const getPostsByUserId = (id) => {
    return fetch(`${baseUrl}/GetUsersPosts/${id}`).then((res) => res.json())
}
