import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar /> <br />
      <Intro />
      <br />
      <About />
      <Skills />
      <br />
      <br />
      <Projects /> <br />
      <br />
      <Experience />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}

export default App;
