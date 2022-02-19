import React from "react";
import book_d from "./assets/images/book-d.png";
import styles from "./assets/book.module.css";

function BookD(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };
  return (
    <img src={book_d} className={styles.book} alt="book-d" onClick={handleClick}/>
  );
}

export default BookD;
