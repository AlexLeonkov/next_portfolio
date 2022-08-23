import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul id="navbar" className="menu">
          <li>
            <Link href="/">Main</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/about">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
