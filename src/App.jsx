import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import Details from "./components/Details";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Details"} element={<Details />} />
        <Route path={"/error"} element={<Error />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
