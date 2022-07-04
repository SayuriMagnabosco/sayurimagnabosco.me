// import axios from 'axios';

// export const ActionTypes = {
//   FETCH_POSTS: 'FETCH_POSTS',
//   FETCH_POST: 'FETCH_POST',
// };

// const ROOT_URL = 'https://diversityapi.onrender.com/api';
// const API_KEY = '?key=s_magnabosco';

// export function fetchPosts() { /* axios get */
//   console.log('fetching posts');
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/posts${API_KEY}`)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
//       })
//       .catch((error) => {
//         console.log('failed to fetch posts');
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//   };
// }

// export function fetchPost(id) { /* axios get */
//   console.log('fetching a single post');
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(`failed to fetch a single post; id#: ${id}`);
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//   };
// }

// export function createPost(post, navigate) { /* axios post */
//   console.log('creating a new post');
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/posts/${API_KEY}`, post)
//       .catch((error) => {
//         console.log('failed to create this new post');
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//     axios.get(`${ROOT_URL}/posts${API_KEY}`)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
//         navigate('/');
//       })
//       .catch((error) => {
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//   };
// }

// export function deletePost(id, navigate) { /* axios delete */
//   console.log(`deleting post ID${id}`);
//   return (dispatch) => {
//     axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//       .catch((error) => {
//         console.log(`failed to delete the post; id#: ${id}`);
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//     axios.get(`${ROOT_URL}/posts${API_KEY}`)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
//         navigate('/');
//       })
//       .catch((error) => {
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//   };
// }

// export function updatePost(post, id) { /* axios put */
//   console.log('updating post');
//   return (dispatch) => {
//     axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
//         console.log('successfully updated post');
//       })
//       .catch((error) => {
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//     axios.get(`${ROOT_URL}/posts${API_KEY}`)
//       .then((response) => {
//         dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
//       })
//       .catch((error) => {
//         dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//       });
//   };
// }
