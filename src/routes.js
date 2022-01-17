import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login }  from "./pages/Login";
import { Register } from "./pages/Register";
import { RegisterStudent1 } from "./pages/RegisterStudent1";
import { RegisterStudent2 } from "./pages/RegisterStudent2";

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerStudent" element={<RegisterStudent1 />} />
        <Route path="/registerStudent/page=1" element={<RegisterStudent1 />} />
        <Route path="/registerStudent/page=2" element={<RegisterStudent2 />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;