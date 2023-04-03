import React from "react";
import style from "./BgGradientWithImg.module.css";

const BgGradientWithImg = () => {
  return (
    <div className={style.bg_gradient_hero}>
      <div className={style.hero_left_content}>
        <h1 className={style.hero_title}>Notification infrastructure</h1>
        <p className={style.hero_desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odit voluptatibus quibusdam dignissimos optio praesentium tempore
          nulla commodi sed blanditiis.
        </p>

        <div className={style.action_btns}>
          <button>
            <span>Start sending for free</span>

            <img src='/img/sections/hero/BgGradientWithImg/arrow-right.svg' alt='' />
          </button>
          <button>Get a demo </button>
        </div>
      </div>
      <div className={style.hero_right_content}>
        <img src='/img/sections/hero/BgGradientWithImg/hero_illustration.svg' alt='product' />
      </div>
    </div>
  );
};

export default BgGradientWithImg;
