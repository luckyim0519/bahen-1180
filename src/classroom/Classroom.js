import React from "react";
import Chalkboard from "./Chalkboard";
import Book from "./Book";
import styles from "./assets/chalkboard.module.css";

function Classroom() {
  return (
    <div>
      <div>This is where the classroom is yayyyyy</div>
      <div className={styles.chalkboardContainer}>
        <Chalkboard></Chalkboard>
      </div>
      <div>
        <Book bookUrl="www.youtube.com"></Book>
      </div>
    </div>
  );
}

export default Classroom;
