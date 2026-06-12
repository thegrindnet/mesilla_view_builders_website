import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";

function App() {
  return (
    <main className="site">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}

export default App;

// const styles = document.createElement("style");
// styles.textContent = `

//   @media (max-width: 900px) {
//     .header {
//       position: absolute;
//     }

//     .nav {
//       display: none;
//     }

//     .hero,
//     .about {
//       grid-template-columns: 1fr;
//     }

//     .hero__card {
//       align-self: auto;
//     }

//     .services,
//     .gallery {
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media (max-width: 620px) {
//     .hero {
//       padding-top: 120px;
//     }

//     .services,
//     .gallery {
//       grid-template-columns: 1fr;
//     }

//     .gallery-card {
//       min-height: 310px;
//     }
//   }
// `;
// document.head.appendChild(styles);
