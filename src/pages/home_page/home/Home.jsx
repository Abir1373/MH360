import Hero from "./Hero";
import About from "../about/About";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";

const Home = () => {
  
  return (
    <div>
      <Hero id="home"></Hero>
      <About id="about"></About>
      <Service id="service"></Service>
      <Gallery id="gallery"></Gallery>
      <Contact id="contact"></Contact>
    </div>
  );
};

export default Home;
