import React from 'react';
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./contactMe/Contact";
import Resume from './Resume/Resume';
import Footer from "./appFooter";

export default function main() {
  return (
    <>
        <Home/>
        <About/>
        <Resume/>
        <Contact/>
        <Footer/>
    </>
  )
}
