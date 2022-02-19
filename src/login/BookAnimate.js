import React from "react";

import { motion } from "framer-motion";

function BookAnimate({ books }) {
  return books.map((id) => {
    return (
      <motion.div
        style={{ position: "absolute" }}
        key={id}
        initial={{
          y: -170,
          x: Math.random() * window.innerWidth,
        }}
        animate={{
          y: window.innerHeight + 100,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      >
        <img
          src={require("../classroom/assets/images/book-a.png")}
          alt="a red and yellow book"
        ></img>
      </motion.div>
    );
  });
}

export default BookAnimate;
