import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Header2 from "./components/Header2";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";

function App() {
  const { status } = useSelector((state) => state.logOutBtn);
  return (
    <BrowserRouter>
      {status ? <Header2 /> : <Header />}

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Details"} element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path={"/error"} element={<Error />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
