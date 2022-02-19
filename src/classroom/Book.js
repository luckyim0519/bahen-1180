import React from "react";
import book_a from './assets/images/book-a.png';
import styles from "./assets/book.module.css";

function Book() {
  const handleClick = () => {
    window.open("https://student.cs.uwaterloo.ca/~cs451/");
  };

  return (
    <img src={book_a} alt="book-a" className={styles.book} onClick={handleClick}/>
  );
}

export default Book;
