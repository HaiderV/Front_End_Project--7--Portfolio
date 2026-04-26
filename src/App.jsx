import { useState } from "react";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col relative min-h-screen bg-[#d7d7d7]">
      <Navbar />
      <Body />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;