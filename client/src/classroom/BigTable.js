import React from "react";
import table from "./assets/images/table.png";
import styles from "./assets/book.module.css";

function BigTable() {
  return (
    <img src={table} className={styles.bigTable} alt="table"/>
  );
}

export default BigTable;
