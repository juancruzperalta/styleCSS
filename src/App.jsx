import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import { Accordions } from "./pages/Accordions.jsx";
function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/accordions" element={<Accordions />} />
      </Routes>
    </Router>
  );
}
export default App;
