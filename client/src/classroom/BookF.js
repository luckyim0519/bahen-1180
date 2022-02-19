import React from "react";
import book_f from "./assets/images/book-f.png";
import styles from "./assets/book.module.css";

function BookF(props) {
  const handleClick = () => {
    window.open(props.bookUrl);
  };
  return (
    <img src={book_f} className={styles.book} alt="book-f" onClick={handleClick}/>
  );
}

export default BookF;
