import React from "react";
import Chalkboard from "./Chalkboard";
import Book from "./Book";
import SmallTable from "./SmallTable";
import BigTable from "./BigTable";
import styles from "./assets/chalkboard.module.css";
import bookstyles from "./assets/book.module.css";

import { pageTransition, pageVariants } from "../Transitions";

import { motion } from "framer-motion";

function Classroom() {
  const cursorPic = require("./assets/images/jokebear_cursor.png");
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ cursor: `url(${cursorPic}),auto` }}
      className={styles.cursor}
    >
      <div>This is where the classroom is yayyyyy</div>
      <div className={styles.chalkboardContainer}>
        <Chalkboard></Chalkboard>
      </div>
      &nbsp;
      <div className={bookstyles.tables}>
        <SmallTable></SmallTable>
        <SmallTable></SmallTable>
        <SmallTable></SmallTable>
      </div>
      <div className={bookstyles.tables}>
        <BigTable></BigTable>
        <BigTable></BigTable>
        <BigTable></BigTable>
      </div>
      <div className={bookstyles.bookshelf}>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
      </div>
    </motion.div>
  );
}

export default Classroom;
