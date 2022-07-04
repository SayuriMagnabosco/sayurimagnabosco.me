// import { ActionTypes } from '../actions/index';

// const initialState = {
//   all: [],
//   current: {},
// };

// const PostsReducer = (state = initialState, action = {}) => {
//   console.log('inside post reducer');
//   switch (action.type) {
//     case ActionTypes.FETCH_POSTS:
//       console.log('fetch ALL posts reducer');
//       return {
//         ...state,
//         all: action.payload, // getting the response.data from the payload
//       };
//     case ActionTypes.FETCH_POST:
//       console.log('fetch ONE post reducer');
//       return {
//         ...state,
//         current: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default PostsReducer;
