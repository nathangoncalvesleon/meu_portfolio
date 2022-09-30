import { useState } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
