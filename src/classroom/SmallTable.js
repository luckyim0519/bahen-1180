import React from "react";
import table from "./assets/images/table.png";
import styles from "./assets/book.module.css";

function SmallTable() {
  return (
    <img src={table} className={styles.smallTable} alt="table"/>
  );
}

export default SmallTable;
