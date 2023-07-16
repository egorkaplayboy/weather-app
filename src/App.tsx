import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      <Popup/>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/month-statistics" Component={MonthStatistics} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
