import React from "react";
import Navbar from "../components/Navbar";

import styles from './InternalTemplate.module.css'

const InternalTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.wrapper}>
        {children}
      </main>
    </div>
  );
};

export default InternalTemplate;
