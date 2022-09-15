import React, { useState } from "react";
// Create context
const BlogContext = React.createContext();
// Create reducer function
const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        { id: Math.floor(Math.random()), title: action.payload },
      ];
    default:
      return state;
  }
};
// create context provider
export const BlogContextProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [state, dispatch] = useReducer(blogReducer, []);
  const addToBlogPost = (title) => {
    // use state way
    // setBlogPosts([
    //   ...blogPosts,
    //   { id: Math.random(), title: `This is ${blogPosts.length + 1} post` },
    // ]);
    // ----> use reducer way
    dispatch({ type: "ADD_BLOG", payload: title });
  };
  return (
    <BlogContext.Provider value={{ data: state, addToBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
// export default created context
export default BlogContext;
