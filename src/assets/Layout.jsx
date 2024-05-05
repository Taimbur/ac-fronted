import React from "react";
import { Route, Routes } from "react-router-dom";
import Maintain from "../Components/Maintain";
import Carosol from "../Components/Carosol";
import Contact from "../Components/Contact";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/server" element={<Maintain />} />
      <Route path="/" element={<Carosol />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default Layout;
