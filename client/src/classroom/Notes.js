import React from "react";

import styles from "./assets/notes.module.css";

function Notes() {
  return (
    <div className={styles.notesContainer}>
      <label>My Notes</label>
      <textarea className={styles.notes}></textarea>
    </div>
  );
}

export default Notes;
