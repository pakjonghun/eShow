import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.flex} ${styles.cursor}`}>
        <StorefrontIcon className={styles.logo} fontSize='large' />
        <p className={styles.large}>eShow</p>
      </div>

      <form className={`${styles.flex} ${styles.form}`}>
        <input className={styles.input} type='text' placeholder='Search' />
        <button className={styles.button} type='submit'>
          <SearchIcon fontSize='large' />
        </button>
      </form>
      <nav className={`${styles.flex} ${styles.nav}`}>
        <div className={styles.navItem}>
          <p className={styles.small}>Height Guatt</p>
          <p className={styles.medium}>Sign In</p>
        </div>
        <div className={styles.navItem}>
          <p className={styles.small}>Yout</p>
          <p className={styles.medium}>Shop</p>
        </div>
        <div
          className={`${styles.flex} ${styles.navItem} ${styles.alignCenter}`}
        >
          <ShoppingCartIcon fontSize='large' />
          <p className={styles.large}>0</p>
        </div>
      </nav>
    </header>
  );
};
export default Header;
