import React from "react";
import "./App.css";
import Caroussel from "./components/Caroussel";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="mainPage">
      <Header />
      <Hero />
      <Caroussel />
    </div>
  );
};

export default App;
