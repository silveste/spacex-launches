"use client";
import { createContext, useReducer } from "react";
import { LaunchType, Action, Sort } from "../constants";

export const globalStateContext = createContext();

const initialGlobalState = {
  [LaunchType.UPCOMING]: false,
  [LaunchType.PAST]: false,
  [LaunchType.UNSUCCESSFUL]: false,
  sort: Sort.ASC,
  page: 1,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case Action.UPDATE:
      return {
        ...state,
        ...action.payload,
        page: 1,
      };
    case Action.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

const GlobalStateProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  return (
    // this is the provider providing state
    <globalStateContext.Provider value={[state, dispatch]}>
      {props.children}
    </globalStateContext.Provider>
  );
};

export default GlobalStateProvider;
