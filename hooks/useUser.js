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
      // setUser(user);
      setTimeout(() => {
        setUser(user);
      }, 100);
      setLoading(false);
    } else {
      setUser(false);
      setLoading(false);
    }
  };

  const verifyAccount = async (token, callback) => {
    try {
      const { data } = await api.get(`/auth/login/verify?token=${token}`);

      if (data.status === 200) {
        callback(data);
      }
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

  const validateUser = async (query, callback) => {
    try {
      const { data } = await api.get(
        `/auth/register/validate?${query.type}=${query.value}`
      );

      if (data.status === 200) {
        callback(data);
      }
      console.log(data);
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

  const login = async (userData, resetForm) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const { data } = await api.post("/auth/login", userData);
      // const token = data.accessToken;
      if (data.message) {
        let response_user = data.data;
        localStorage.setItem("user-data", JSON.stringify(response_user));
        //set cookie for user
        setCookie(data);
        // handle user to show loggedin
        // console.log("done");
        handleUser(data);
        //reset-form data
        resetForm();
        setLoading(false);
      }
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
    // Toastr.success("LoggedOut");
  };

  const updateCart = (newCart) => {
    // const newUser =
  };

  const createAccount = async (userData, callback, onError) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", userData);

      const { data } = response;

      if (data.status === 200) {
        callback(data);
      }
    } catch (error) {
      const { response } = error;
      if (response) {
        onError(response.data.message?.[0]);
        setErrorMessage(response.data.message?.[0]);
      } else {
        setErrorMessage("A network error occured");
      }
      handleUser(false);
    }
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
    validateUser,
    verifyAccount,
    createAccount,
    errorMessage,
    setErrorMessage,
    logout,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useUserAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
};

export const useUser = () => {
  return useContext(authContext);
};
