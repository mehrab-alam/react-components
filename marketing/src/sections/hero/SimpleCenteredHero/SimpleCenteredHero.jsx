import React from "react";
import styles from "./SimpleCenteredHero.module.css";

const SimpleCenteredHero = () => {
  return (
    <div className={styles.simple_centered_hero}>
      <h1 className={styles.hero_title}>
        Everything you need in <span className={styles.hero_highlight_word}>one place</span>
      </h1>
      <p className={styles.hero_desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae consequuntur id commodi, tempora minus ipsam.
      </p>
      <div className={styles.hero_action_btns}>
        <button>Get Started</button>
        <button>
          <span>Learn more</span>
          <img src='/img/sections/hero/simpleCenteredHero/caret-right.svg' alt='' />
        </button>
      </div>

      <div className={styles.hero_bottom_img}>
        <img src='' alt='' />
      </div>
    </div>
  );
};

export default SimpleCenteredHero;
