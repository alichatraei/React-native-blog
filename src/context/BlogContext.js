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
    default:
      return state;
  }
};
// create context provider
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
export const { Context, Provider } = addPostContext(
  blogReducer,
  { addToBlogPost },
  [{ id: uuidv4(), title: "Initial Title", context: "Initial Content" }]
);
