import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";



function App() {
  return (
    <>
     <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="/about" element={<About />}></Route>
   <Route path="/contact" element={<Contact />}></Route>
   <Route path="/project" element={<Project />}></Route>
     </Routes>
    </>
  );
}

export default App;
