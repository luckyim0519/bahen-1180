import React from "react";
import Chalkboard from "./Chalkboard";
import Book from "./Book";
import SmallTable from "./SmallTable";
import BigTable from "./BigTable";
import styles from "./assets/chalkboard.module.css";
import bookstyles from "./assets/book.module.css";
import course_outline from "./assets/co370_course_outline.pdf";
import homework from "./assets/co370_hw4.pdf";
import week4 from "./assets/co370_week4.pdf";
import week6a from "./assets/co370_notes_week6a.pdf";
import practice_test from "./assets/co370_practice_test1.pdf";
import test_solution from "./assets/co370_test1_soln.pdf";

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
        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Course Outline</span>
          <Book bookUrl={course_outline}>
          </Book>
        </div>

        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Homework 4</span>
          <Book bookUrl={homework}>
          </Book>
        </div>

        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Week 4 Notes</span>
          <Book bookUrl={week4}>
          </Book>
        </div>

        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Week 6a Notes</span>
          <Book bookUrl={week6a}>
          </Book>
        </div>

        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Practice Test 1</span>
          <Book bookUrl={practice_test}>
          </Book>
        </div>

        <div className={bookstyles.tooltip}>
          <span className={bookstyles.tooltiptext}>Test 1 Solution</span>
          <Book bookUrl={test_solution}>
          </Book>
        </div>
      </div>
    </motion.div>
  );
}

export default Classroom;
