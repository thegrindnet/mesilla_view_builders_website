import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="eyebrow">
          Reliable Construction • Clean Finish • Built Right
        </p>
        <h1>Modern construction solutions for homes and businesses.</h1>
        <p className="hero__text">
          We help property owners bring their projects to life with dependable
          craftsmanship, clear communication, and a clean professional finish.
        </p>

        <div className="hero__buttons">
          <a className="btn btn--primary" href="#contact">
            Request a Quote
          </a>
          <a className="btn btn--secondary" href="#gallery">
            View Our Work
          </a>
        </div>
      </div>

      <div className="hero__card">
        <div>
          <p>Projects Completed</p>
          <strong>120+</strong>
        </div>
        <div>
          <p>Years Experience</p>
          <strong>30+</strong>
        </div>
        <div>
          <p>Client Satisfaction</p>
          <strong>98%</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
