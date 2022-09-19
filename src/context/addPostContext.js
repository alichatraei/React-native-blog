import React, { createContext, useReducer } from "react";
// export a default function
export default (reducer, actions, initialState) => {
  const Context = createContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // create automating context
  const automatingContextActions = () => {
    let automaticContext = {};
    for (const key in actions) {
      automaticContext[key] = actions[key](dispatch);
    }
    return automaticContext;
  };
  const Provider = ({ children }) => (
    <Context.Provider value={{ state, ...automatingContextActions }}>
      {children}
    </Context.Provider>
  );
  return { Context, Provider };
};
