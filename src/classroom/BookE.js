import React from "react";
import book_e from "./assets/images/book-e.png";
import styles from "./assets/book.module.css";

function BookE(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };
  return (
    <img src={book_e} className={styles.book} alt="book-e" onClick={handleClick}/>
  );
}

export default BookE;
