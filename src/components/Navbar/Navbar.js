import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        Movies App
      </Link>

      <div className={styles.right}>
        <p className={styles.link}>
          <Link to="/explore">Explore</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
