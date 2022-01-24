import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
import SegundaTela from "./pages/SegundaTela/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/segundatela" element={<SegundaTela />} />
        <Route path="/segundatela/details" element={<Details />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
