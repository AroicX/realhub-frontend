import React, { useState, useEffect, useContext, createContext } from "react";
import { getToken, setCookie, deleteCookie } from "@/services/cookies";
import api from "@/services/api";

const authContext = createContext();

const useUserAuth = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUser = (user) => {
    if (user) {
      setUser(user);
      setLoading(false);
    } else {
      setUser(false);
      setLoading(false);
    }
  };

  const userHandler = async (token, resetForm) => {
    setCookie(token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const { data: userInfo } = await api.get("/session.json");
    localStorage.setItem("user-data", JSON.stringify(userInfo));
    handleUser(userInfo);
    resetForm();
  };

  const login = async (userData, resetForm) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const { data } = await api.post("/login.json", userData);
      const token = data.token;
      await userHandler(token, resetForm);
    } catch (error) {
      const { response } = error;
      if (response) {
        setErrorMessage(response.data.message);
      } else {
        setErrorMessage("A network error occured");
      }
      handleUser(false);
    }
  };

  const logout = () => {
    deleteCookie();
    localStorage.removeItem("user-data");
    handleUser(false);
  };

  const updateCart = (newCart) => {
    // const newUser =
  };

  const createAccount = (userData) => {
    setLoading(true);
    try {
      const { data } = api.post("/register.json", userData);
    } catch (error) {}
  };

  useEffect(() => {
    const token = getToken();

    token
      ? handleUser(JSON.parse(localStorage.getItem("user-data")) || false)
      : logout();
  }, [loading]);

  return {
    user,
    loading,
    login,
    createAccount,
    errorMessage,
    logout,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useUserAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useUser = () => {
  return useContext(authContext);
};
