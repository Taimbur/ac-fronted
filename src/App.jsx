import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Layout from "./assets/Layout";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div data-scroll data-scroll-speed="0.5">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
