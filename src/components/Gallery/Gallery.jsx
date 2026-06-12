import "./Gallery.css";
import { galleryItems } from "../../utils/constants";

function Gallery() {
  return (
    <section id="gallery" className="section section--dark">
      <div className="section__heading">
        <p className="eyebrow">Project Gallery</p>
        <h2>Clean, durable work with a modern finish.</h2>
      </div>

      <div className="gallery">
        {galleryItems.map((item) => (
          <article className="gallery-card" key={item.title}>
            <img src={item.url} alt={item.title} />
            <div className="gallery-card__content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
