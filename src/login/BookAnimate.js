import React from "react";

import { motion } from "framer-motion";

function BookAnimate({ books }) {

  console.log(books);

  return books.map((bookNumber, index) => {
    console.log(window.innerWidth / bookNumber, index);
    return (
      <motion.div
        style={{ position: "absolute" }}
        key={`book-${Math.random().toString(16).slice(2)}`}
        initial={{
          y: -170,
          x: window.innerWidth / bookNumber,
        }}
        animate={{
          y: window.innerHeight + 100,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: (index / books.length) * 10,
          ease: "linear",
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
