import React, { useState } from "react";
import styles from "./login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Logging in now!");
    // firebase stuff
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <div className={styles.inputContainer}>
          <label>Username</label>
          <input
            className={styles.inputField}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label>Password</label>
          <input
            className={styles.inputField}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className={styles.loginButton} onClick={handleClick}>
          Let Me Innn!
        </button>
      </div>
    </div>
  );
}

export default Login;
