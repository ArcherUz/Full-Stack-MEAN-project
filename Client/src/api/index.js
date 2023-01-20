import axios from 'axios';

const url = 'http://localhost:5000/posts';

//uses axios library to make a GET request
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);