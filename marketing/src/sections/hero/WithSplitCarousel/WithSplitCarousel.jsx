import React from "react";
import style from "./WithSplitCarousel.module.css";
import Carousel, { CarouselItem } from "./Carousel";

const WithSplitCarousel = () => {
  const settings = {
    dots: false,
  };
  return (
    <div className={style.split_carousel_hero}>
      <div className={style.hero_left_content}>
        <div className={style.hero_tag_line}>FOR WELLNESS BUSINESS OWNERS</div>
        <h1 className={style.hero_title}>Grow beyond classes</h1>
        <p className={style.hero_desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odit voluptatibus quibusdam dignissimos optio praesentium tempore
          nulla commodi sed blanditiis.
        </p>

        <div className={style.action_btns}>
          <button>BOOK A DEMO </button>
          <button>TRY NOW</button>
        </div>
      </div>
      <div className={style.hero_right_content}>
        <div className={style.carousel_container}>
          <Carousel>
            <CarouselItem>
              <img
                src='https://images.unsplash.com/photo-1531403939386-c08a16cd7eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt=''
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src='https://images.unsplash.com/photo-1585154536515-c766bd2a6cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=608&q=80'
                alt=''
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src='https://images.unsplash.com/photo-1593810451056-0acc1fad48c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                alt=''
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src='https://images.unsplash.com/photo-1617818118199-eca81dc4b579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=568&q=80'
                alt=''
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WithSplitCarousel;
