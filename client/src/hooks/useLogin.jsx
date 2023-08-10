import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const res = await axios.post("http://localhost:4000/api/user/login", {
      email,
      password,
    });

    if (!res.data) {
      setIsLoading(false);
      setError(res.data.error);
    }
    if (res.data) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(res.data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: res.data });

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
