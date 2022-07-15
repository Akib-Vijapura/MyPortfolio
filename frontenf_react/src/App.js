import React from "react";
import "./App.scss";

// Import all container files
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";

//import all componenents files
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
