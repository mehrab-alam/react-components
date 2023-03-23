import "./HeadStream.css";

const HeadStream = () => (
  <section className='section-headstream'>
    <div>
      <h1>Dedicated Developers for Startups</h1>
      <p>
        With Hundred.dev build teams, <br />
        that help you succeed <br />
        and beat the competition
      </p>
      <button>Get Started</button>
    </div>
    <div>
      <div className='stream-container'>
        <div className='circle' style={{ backgroundColor: "orange" }}></div>
        <img src='/img/sections/hero/HeadStream/c1.jpeg' alt='' />
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/c2.jpeg' alt='' />
        <div className='cylinder' style={{ backgroundColor: "orange" }}></div>
      </div>
      <div className='stream-container'>
        <div className='cylinder' style={{ backgroundColor: "#628aec" }}></div>
        <img src='/img/sections/hero/HeadStream/c3.jpeg' alt='' />
        <img src='/img/sections/hero/HeadStream/c4.jpeg' alt='' />
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/c5.jpeg' alt='' />
        <div className='cylinder' style={{ backgroundColor: "#ea7e60" }}></div>
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/c6.jpeg' alt='' />
      </div>
    </div>
  </section>
);

export default HeadStream;
