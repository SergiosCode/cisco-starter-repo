import React, { useState, useEffect } from "react";
import styles from "../styles/DataComponent.module.css";

function DataComponent({ title }) {
  const [data1, setData] = useState("loading...");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json").then((res) => {
      res.json().then((data) => {
        console.log(data.ip);
        setData(data.ip);
      });
    });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      <hr />
      <h2>{data1}</h2>
    </div>
  );
}

export default DataComponent;
