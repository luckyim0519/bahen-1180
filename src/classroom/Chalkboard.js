import React from "react";
import styles from "./assets/chalkboard.module.css";
import { useNavigate } from "react-router-dom";

function Chalkboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div onClick={handleClick} className={styles.board}>
      <video className={styles.video}>
        <source
          src={require("./assets/paul_chow.mp4")}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default Chalkboard;
