import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/clients">Clients</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
