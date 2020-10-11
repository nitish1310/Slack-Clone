import React, { createContext, useContext, useReducer } from "react";

//Prepre the datalayer - push & pull information from datalayer
export const StateContext = createContext();

//Goal is to push user into datalayer when login and pull in whereever inside the app
export const StateProvider = ({ reducer, initialState, children }) => (
  //reducer - listen any kind of actions
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information from the data layer
//useStateValue - use value from datalayer and gab stuff from datalayer
export const useStateValue = () => useContext(StateContext);
