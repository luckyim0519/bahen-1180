import React from "react";
import Chalkboard from "./Chalkboard";
import Book from "./Book";
import Table from "./Table";
import styles from "./assets/chalkboard.module.css";
import bookstyles from "./assets/book.module.css";

function Classroom() {
  return (
    <div>
      <div>This is where the classroom is yayyyyy</div>
      <div className={styles.chalkboardContainer}>
        <Chalkboard></Chalkboard>
      </div>&nbsp;
      <div className={bookstyles.bookshelf}>
        <Table></Table>
        <Table></Table>
        <Table></Table>
      </div>
      <div className={bookstyles.bookshelf}>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
        <Book bookUrl="https://student.cs.uwaterloo.ca/~cs451/"></Book>
      </div>
    </div>
  );
}

export default Classroom;
