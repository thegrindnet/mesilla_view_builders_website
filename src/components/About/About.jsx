import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__image"></div>
      <div className="about__content">
        <p className="eyebrow">Why Choose Us</p>
        <h2>We build with honesty, safety, and pride.</h2>
        <p>
          From small remodels to large commercial jobs, our team focuses on
          dependable communication, quality materials, and workmanship that
          lasts.
        </p>
        <ul>
          <li>Licensed and insured construction team</li>
          <li>Clear project estimates and timelines</li>
          <li>Clean job sites and professional crews</li>
          <li>Residential and commercial experience</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
