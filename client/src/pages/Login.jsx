import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Lottie from "lottie-react";
import loginData from "../assets/login.json";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login">
      <section className="flex-left">
        <Lottie animationData={loginData} />
      </section>
      <div className="flex-right">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h3>Log In</h3>

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

          <button className="formBtn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
