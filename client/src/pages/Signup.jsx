import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Lottie from "lottie-react";
import signupData from "../assets/signup.json";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="signup">
      <section className="flex-left">
        <Lottie className="signupImg" animationData={signupData} />
      </section>
      <div className="flex-right">
        <form className="signupForm" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <label>Email address:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button className="formBtn">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
