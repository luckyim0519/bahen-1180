import React from "react";
import table from "./assets/images/table.png";
import styles from "./assets/book.module.css";

function Table() {
  return (
    <img src={table} className={styles.table} alt="table" width="20%"/>
  );
}

export default Table;
