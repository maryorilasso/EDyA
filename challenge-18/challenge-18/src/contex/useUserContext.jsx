import React, { createContext, useReducer, useContext, useEffect } from "react";

const UserContext = createContext();

const initialUserState = {
  isAuthenticated: false,
  username: null,
  lastVisitedPage: localStorage.getItem("lastVisitedPage") || "/",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        lastVisitedPage: state.lastVisitedPage,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        lastVisitedPage: "/",
      };
    case "SET_LAST_PAGE":
      return { ...state, lastVisitedPage: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", state.lastVisitedPage);
  }, [state.lastVisitedPage]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
