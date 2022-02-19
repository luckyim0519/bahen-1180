import React from 'react'
import styles from "./avartar.module.css";

function SelectAvartar() {
  return (
    <div className={styles.avartarContainer}>
        <h1>select your avatar</h1>
        <p>Choose pink or blue</p>
        <button type={styles.button}> Select yours! </button>

    </div>
  );
}

export default SelectAvartar;