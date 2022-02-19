import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { signIn } from "../firebase";
import { pageTransition, pageVariants } from "../Transitions";

import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Logging in now!");
    // firebase stuff, determine if pw and username correct
    if (signIn(email, password)) {
      navigate("/classroom");
    }


    // let loginSuccess = true;

    // if (loginSuccess) {
    //   navigate("/classroom");
    // }
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={styles.loginParent}
    >
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <div className={styles.inputContainer}>
          <label>email</label>
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
          Let Me Innn!
        </button>
      </div>
    </motion.div>
  );
}

export default Login;
