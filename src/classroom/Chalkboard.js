import React from "react";
import styles from "./assets/chalkboard.module.css";
import { useNavigate } from "react-router-dom";
import Youtube from "./Youtube";

function Chalkboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div onClick={handleClick} className={styles.board}>
      <Youtube embedId="rYG1D5lUE4I"></Youtube>
    </div>
  );
}

export default Chalkboard;
