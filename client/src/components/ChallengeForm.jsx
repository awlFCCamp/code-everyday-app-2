import { useState } from "react";
import { useChallengesContext } from "../hooks/useChallengesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./challengeForm.css";

import axios from "axios";

const ChallengeForm = () => {
  const { dispatch } = useChallengesContext();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [completed, setCompleted] = useState("");
  const [rating, setRating] = useState("");
  const { user } = useAuthContext();
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    const challenge = {
      title,
      language,
      level,
      completed,
      rating,
      note,
    };
    axios
      .post("http://localhost:4000/api/challenges", challenge, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(function (res) {
        if (res.data) {
          setTitle("");
          setLanguage("");
          setLevel("");
          setCompleted("");
          setRating("");
          setNote("");
          dispatch({ type: "CREATE_CHALLENGE", payload: res.data });
        }
      })
      .catch(function (error) {
        setError(error);
        console.log(error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Challenge</h3>

      <label>Challenge Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Language:</label>
      <input
        type="text"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
      />

      <label>Difficulty Level:</label>
      <input
        type="text"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
      />
      <label>Completion:</label>

      <input
        type="text"
        onChange={(e) => setCompleted(e.target.value)}
        value={completed}
      />

      <label>Rating:</label>
      <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />
      <label>Note</label>

      <textarea
        id="note"
        name="note"
        rows="4"
        cols="50"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />

      <button className="formBtn" id="addBtn">
        Add Challenge
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ChallengeForm;
