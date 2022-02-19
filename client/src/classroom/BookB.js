import React from "react";
import book_b from "./assets/images/book-b.png";
import styles from "./assets/book.module.css";

function BookB(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };
  return (
    <img src={book_b} className={styles.book} alt="book-b" onClick={handleClick}/>
  );
}

export default BookB;
