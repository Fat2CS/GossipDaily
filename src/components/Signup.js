import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { auth } from "../utils/firebase.config";

function Signup() {
  // permet de recuperer tout ce qui a dans le input

  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        // mettre à jour le profile
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName
          });
          console.log(userAuth);
          //   necessité de recharger la page pour recuperer le display Name
          window.location.reload();
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup">
        <h3> S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
          />
          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
