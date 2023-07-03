import React from "react";
import logo from "../../assets/investment-calculator-logo.jpg";
import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
