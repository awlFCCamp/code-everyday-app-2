import { useEffect } from "react";
import { useChallengesContext } from "../hooks/useChallengesContext";
import axios from "axios";
import DetailCard from "../components/DetailCard";
import ChallengeForm from "../components/ChallengeForm";
import { useAuthContext } from "../hooks/useAuthContext";
import "./home.css";
function Home() {
  const { challenges, dispatch } = useChallengesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/challenges", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(res.data);
        if (res.data) {
          dispatch({ type: "SET_CHALLENGES", payload: res.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchChallenges();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="flex-left">
        {challenges &&
          challenges.map((challenge) => (
            <DetailCard
              className="detailCard"
              challenge={challenge}
              key={challenge._id}
            />
          ))}
      </div>
      <ChallengeForm className="flex-right" />
    </div>
  );
}

export default Home;
