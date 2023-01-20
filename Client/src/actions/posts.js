import * as api from '../api';

//action creators
//update the state by dispatching an action
export const getPosts = () => async (dispatch) => {
    try {
        // data is the post in the response from api
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data }); //passing action to the reducers
    } catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post) => async (dispatch) =>{
    try {
        //post api request to backend server
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}