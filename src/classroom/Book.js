import React from "react";
import book_a from "./assets/images/book-a.png";
import styles from "./assets/book.module.css";

function Book(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };

  return (
    <img src={book_a} className={styles.book} alt="book-a" onClick={handleClick}/>
  );
}

export default Book;
