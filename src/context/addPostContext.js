import React, { createContext, useReducer } from "react";
// export a default function
export default (reducer, actions, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // create automating context
    const automatingContextActions = () => {
      let automaticContext = {};
      for (const key in actions) {
        // In this loop we returned value of action helper functions to new obj property
        automaticContext[key] = actions[key](dispatch);
      }
      return automaticContext;
    };
    return (
      <Context.Provider value={{ state, ...automatingContextActions() }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
