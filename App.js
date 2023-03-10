import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./Context/authContext";
import "./App.css";

export default function App() {
  const [isLoggined, setIsLoggined] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const router = useRoutes(routes);
  const login = useCallback((userInfos, token) => {
    setToken(token);
    setUserInfo(userInfos);
    setIsLoggined(true);
    localStorage.setItem("user", JSON.stringify({ token }));
  },[])
  const logout = useCallback(() => {
    setToken(null);
    setUserInfo({});
    localStorage.removeItem("user");
  },[])
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    
    if (localStorageData) {
      fetch(`http://127.0.0.1:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggined(true);
          setUserInfo(userData);
        });
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggined,
        token,
        userInfo,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
