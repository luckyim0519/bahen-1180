import React from "react";
import book_c from "./assets/images/book-c.png";
import styles from "./assets/book.module.css";

function BookC(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };
  return (
    <img src={book_c} className={styles.book} alt="book-c" onClick={handleClick}/>
  );
}

export default BookC;
