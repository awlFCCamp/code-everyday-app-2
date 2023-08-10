import { ChallengesContext } from "../context/ChallengesContext";
import { useContext } from "react";

export const useChallengesContext = () => {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw Error(
      "useChallengesContext must be used inside an ChallengesContextProvider"
    );
  }

  return context;
};
