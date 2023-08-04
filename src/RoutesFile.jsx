import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorHandler from "./Components/ErrorHandler";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import Contact from "./Pages/Contact";
import Form from "./Components/Form";
const RoutesFile = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<Students />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/form/:studentId" element={<Form/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<ErrorHandler />}/>
      </Routes>
    </>
  );
};
export default RoutesFile;
