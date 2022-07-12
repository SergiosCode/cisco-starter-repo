import React, { useState, useEffect } from "react";
import styles from "../styles/DataComponent.module.css";

function DataComponent({ title, data, IPType }) {
  const [data1, setData] = useState("Loading...");


  useEffect(() => {

    if (IPType === "IPV4") {
      fetch("https://api.ipify.org?format=json").then((res) => {
        res.json().then((data) => {
          setData(`${data.ip}`);
        });
      });
    } else if (IPType === "IPV6") {
      fetch("https://api64.ipify.org?format=json").then((res) => {
        res.json().then((data) => {
          setData(`${data.ip}`);
        });
      });
    } else if (IPType === undefined) {
      setData(data);
    }
  }, [data]);

  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      <hr />
      <h2>{data1}</h2>
    </div>
  );
}

export default DataComponent;
