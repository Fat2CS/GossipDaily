import React from "react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="connect-modal">
      <div className="header-btn">
        {/* style conditionnel */}
        <button
          style={{ background: signUp ? "rgb(28,28,28" : "rgb(83,83,83" }}
          onClick={() => setSignUp(true)}
        >
          {" "}
          S'incrire
        </button>
        <button
          style={{ background: signUp ? "rgb(83,83,83" : "rgb(28,28,28" }}
          onClick={() => setSignUp(false)}
        >
          {" "}
          Se connecter
        </button>
      </div>
      {signUp ? <Signup /> : <Login />}
    </div>
  );
};
export default ConnectModal;
