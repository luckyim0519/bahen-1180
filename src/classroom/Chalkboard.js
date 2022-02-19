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
      <Youtube embedId="dQw4w9WgXcQ"></Youtube>
    </div>
  );
}

export default Chalkboard;
