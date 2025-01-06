import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import routes from "./routesConfig.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="container">
        <Header className="header" />
        <SideBar className="sidebar" />
        <div className="content">
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  </StrictMode>
);
