import React, { useReducer } from 'react';

const initialState = {
  userInfo: '(이름 없음)',
  isLoggedIn: false,
  accessToken: null,
  getUserInfo: () => {},
  login: () => {},
  logout: () => {},
};

export const UserContext = React.createContext(initialState);

const SET_USER_INFO = 'SET_USER_INFO';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

function userReducer(state, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      return { ...state, userInfo: action.payload };
    }
    case LOG_IN: {
      return { ...state, accessToken: action.payload, isLoggedIn: true };
    }
    case LOG_OUT: {
      return { ...state, userInfo: null, accessToken: null, isLoggedIn: false };
    }
    default:
      return { ...state };
  }
}

const UserProvider = (props) => {
  // State Hook
  const [userState, dispatchUserAction] = useReducer(userReducer, initialState);

  // Action Creator 정의
  const setUserInfo = (userInfo) => {
    dispatchUserAction({ type: SET_USER_INFO, payload: userInfo });
  };

  const login = (accessToken) => {
    dispatchUserAction({ type: LOG_IN, payload: accessToken });
  };

  const logout = () => {
    dispatchUserAction({ type: LOG_OUT });
  };

  return (
    <UserContext.Provider
      value={{
        userInfo: userState.userInfo,
        accessToken: userState.accessToken,
        isLoggedIn: userState.isLoggedIn,
        setUserInfo,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
