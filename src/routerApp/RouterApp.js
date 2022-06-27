import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Game from "../navigatePage/Game";
import Erorr from "../mainPage/Erorr";
import Home from "../Home";
import LogIn from "../navigatePage/LogIn";

const RouterApp = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Game" element={<Game />} />
      <Route path="posts" element={<MainPage />} />
      <Route path="Erorr" element={<Erorr />} />
      <Route path="LogIn" element={<LogIn />} />
    </Routes>
  );
};
export default RouterApp;
