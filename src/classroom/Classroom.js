import React from "react";
import Chalkboard from "./Chalkboard";
import styles from "./assets/chalkboard.module.css";

function Classroom() {
  return (
    <div>
      <div>This is where the classroom is yayyyyy</div>
      <div className={styles.chalkboardContainer}>
        <Chalkboard></Chalkboard>
      </div>
    </div>
  );
}

export default Classroom;
