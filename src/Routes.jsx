import React from "react";
import { BrowserRouter, Route, Routes as Browser } from "react-router-dom";
import App from "./App";
import Signup from "./Component/Signup";
import Login from "./Component/Login";


const Routes = () => {
  return (
    <BrowserRouter>
      <Browser>
        <Route path="/" element={<App />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Browser>
    </BrowserRouter>
  );
};

export default Routes;