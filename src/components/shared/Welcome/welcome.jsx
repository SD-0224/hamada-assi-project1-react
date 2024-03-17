import React from "react";
import styles from "./welcome.module.css";

function Welcome() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.text}>
        <h1>Welcome to our website!</h1>
        <p>We have a new design that's fresh, modern, and easy to use.</p>
      </div>
    </section>
  );
}

export default Welcome;
