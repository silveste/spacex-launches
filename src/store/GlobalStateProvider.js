"use client";
import { createContext, useReducer, useEffect } from "react";
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
  const localStorageState = JSON.parse(localStorage.getItem("state"));

  const [state, dispatch] = useReducer(globalReducer, {
    ...initialGlobalState,
    ...localStorageState,
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <globalStateContext.Provider value={[state, dispatch]}>
      {props.children}
    </globalStateContext.Provider>
  );
};

export default GlobalStateProvider;
