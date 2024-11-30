import React from "react";
import Home from "./componnents/Home"
import Projects from "./componnents/Projects";
import Footer from "./componnents/Footer";
import Contact from "./componnents/Contact";

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
