import "./Services.css";
import { services } from "../../utils/constants";

function Services() {
  return (
    <section id="services" className="section">
      <div className="section__heading">
        <p className="eyebrow">What We Do</p>
        <h2>Construction services built around your project.</h2>
      </div>

      <div className="services">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <span className="service-card__icon">▰</span>
            <h3>{service}</h3>
            <p>
              Professional work, realistic timelines, and attention to detail
              from planning to final walkthrough.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
