import React, { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Registering new user now!!");
    // firebase stuff
    let registerSuccess = true;

    if (registerSuccess) {
      navigate("/classroom");
    }
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginContainer}>
        <h1>Make an Account</h1>
        <div className={styles.inputContainer}>
          <label>Name</label>
          <input
            className={styles.inputField}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label>Email</label>
          <input
            className={styles.inputField}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Yayy sign me up!
        </button>
      </div>
    </div>
  );
}

export default Register;
