import { useAuthContext } from "./useAuthContext";
import { useChallengesContext } from "./useChallengesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: challengesDispatch } = useChallengesContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    challengesDispatch({ type: "SET_CHALLENGES", payload: null });
  };

  return { logout };
};
