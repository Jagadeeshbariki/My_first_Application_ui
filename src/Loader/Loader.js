import React from 'react';
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
        <div className={styles.mask}></div>
        <img src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif" alt="Loading..."></img>
    </div>
  );
}

export default Loader;
