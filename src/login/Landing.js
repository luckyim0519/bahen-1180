import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import BookAnimate from "./BookAnimate";

function Landing() {
  const books = Array.from(
    { length: Math.floor(Math.random() * 15 + 5) },
    () => {
      return `book-${Math.random().toString(16).slice(2)}`;
    }
  );

  const bookContainerVariation = {
    waterfall: {
      transition: {
        delayChildren: 1,
      },
    },
  };

  return (
    <div
      style={{
        overflowY: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          height: "100vh",
        }}
        variants={bookContainerVariation}
      >
        <BookAnimate books={books}></BookAnimate>
      </motion.div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <div>This is a landing page!!!</div>
        <div>Here are some links</div>
        <Link to="/classroom">Classroom Link!!</Link>&nbsp;
        <Link to="/login">Login Link!!</Link>&nbsp;
        <Link to="/selectAvartar">selectAvartar Link!!</Link>&nbsp;
      </div>
    </div>
  );
}

export default Landing;
