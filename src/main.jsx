import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import { Accordions } from "./pages/Accordions.jsx";
import { DropdownMenu } from "./pages/DropdownMenu.jsx";
import { VerticalNavBar } from "./pages/VerticalNavBar.jsx";
import { HorizontalNavBar } from "./pages/HorizontalNavBar.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="container">
        <Header className="header" />
        <SideBar className="sidebar" />
        <div className="content">
          <Routes>
            <Route path="/accordions" element={<Accordions />} />
            <Route path="/dropdown" element={<DropdownMenu />} />
            <Route path="/verticalNav" element={<VerticalNavBar />} />
            <Route path="/horizontalNav" element={<HorizontalNavBar />} />
          </Routes>
        </div>
      </div>
    </Router>
  </StrictMode>
);
