import { v4 as uuidv4 } from "uuid";
import addPostContext from "./addPostContext";
// Create reducer function
const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "DELETE_BLOG":
      return state.filter((item) => item?.id !== action.payload.id);
    case "EDIT_BLOG":
      return state.map((item) =>
        item?.id === action.payload.id
          ? { id, title: action.payload.title, content: action.payload.content }
          : item
      );
    default:
      return state;
  }
};
// add to blog action helper function
const addToBlogPost = (dispatch) => {
  // use state way ----->
  // setBlogPosts([
  //   ...blogPosts,
  //   { id: Math.random(), title: `This is ${blogPosts.length + 1} post` },
  // ]);
  // ----> use reducer way
  // dispatch({ type: "ADD_BLOG", payload: title });
  // return function
  return (title, content) =>
    dispatch({ type: "ADD_BLOG", payload: { title, content } });
};
// delete blog action helper function
const deleteBlog = (dispatch) => {
  return (id) => dispatch({ type: "DELETE_BLOG", payload: { id } });
};
// Edit blog action helper function
const editBlog = (dispatch) => {
  return (id, title, content) =>
    dispatch({ type: "EDIT_BLOG", payload: { id, title, content } });
};
// export Context and Provider from addBlogContext
export const { Context, Provider } = addPostContext(
  blogReducer,
  { addToBlogPost, deleteBlog, editBlog },
  [{ id: uuidv4(), title: "Initial Title", context: "Initial Content" }]
);
