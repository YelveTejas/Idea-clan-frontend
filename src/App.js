import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import PrivateRoute from "./component/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/course" element={<PrivateRoute><Courses /></PrivateRoute>} />
      </Routes>
    </>
  );
};

export default App;
