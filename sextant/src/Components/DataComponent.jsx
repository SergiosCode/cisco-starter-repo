import React from "react";
import styles from "../styles/DataComponent.module.css";

function DataComponent({title, data}) {
  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      <hr />
      <h2>{data}</h2>
    </div>
  );
}

export default DataComponent;
