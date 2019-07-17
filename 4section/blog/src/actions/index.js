import Jsonplaceholder from '../apis/Jsonplaceholder';

export const fetchPosts = () =>   async dispatch => {
        const response =  await Jsonplaceholder.get('/posts');
        dispatch({type: 'FETCH_POST',payload: response.data})
    };

export const fetcchUser = (id) => async dispatch => {
    const response = await Jsonplaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};