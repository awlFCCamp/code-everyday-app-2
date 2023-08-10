/* eslint-disable react/prop-types */

import axios from "axios";
import { useChallengesContext } from "../hooks/useChallengesContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
import Lottie from "lottie-react";
import cardData from "../assets/card1.json";
import "./detailCard.css";

function DetailCard({ challenge }) {
  const { dispatch } = useChallengesContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) return;
    axios
      .delete(`http://localhost:4000/api/challenges/${challenge._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          dispatch({ type: "DELETE_CHALLENGE", payload: res.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="challenge-details">
      <div className="card-left">
        <h4>{challenge.title}</h4>
        <p>
          <strong>Language: </strong>
          {challenge.language}
        </p>
        <p>
          <strong>Level: </strong>
          {challenge.level}
        </p>
        <p>
          <strong>completed: </strong>
          {challenge.completed}
        </p>
        <p>
          <strong>Rating: </strong>
          {challenge.rating}
        </p>
        <p>
          <strong>Note:</strong>
          <br />
          {challenge.note}
        </p>

        <p>{challenge.date}</p>
        <p>
          {formatDistanceToNow(new Date(challenge.createdAt), {
            addSuffix: true,
          })}
        </p>
        <div className="cardBtns">
          <button className="material-symbols cardBtn">Edit</button>

          <button className="material-symbols cardBtn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="cardRight">
        <Lottie className="cardImage" animationData={cardData} />
      </div>
    </div>
  );
}

export default DetailCard;
