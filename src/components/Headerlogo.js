import React from "react";

import logo from "../styles/img/Balancetes.png";
export const Headerlogo = () => {
  return (
    <div className="logo">
      <img
        style={{
          //   marginLeft: "22rem",

          height: "120%",
          borderRadius: "50px 0px 50px 0px"
        }}
        src={logo}
        alt=""
      />
      <div>
        <h2>Raconte tes *GOSSIPS drôles ou moins drôles !</h2>

        <span>*Potins</span>
        <div className="list">
          <p>Quotidien</p>
          <p>Professionnel</p>
          <p>Famille</p>
          <p>People</p>
        </div>
      </div>
    </div>
  );
};
