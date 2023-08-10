import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChallengesContextProvider } from "./context/ChallengesContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChallengesContextProvider>
        <App />
      </ChallengesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
