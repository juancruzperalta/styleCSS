import { Accordions } from "./pages/Accordions.jsx";
import { DropdownMenu } from "./pages/DropdownMenu.jsx";
import { VerticalNavBar } from "./pages/VerticalNavBar.jsx";
import { HorizontalNavBar } from "./pages/HorizontalNavBar.jsx";
import { Tabs } from "./pages/Tabs.jsx";
import { Buttons } from "./pages/Buttons.jsx";
import { Forms } from "./pages/Forms.jsx";
import { Cards } from "./pages/Cards.jsx";
import { Alerts } from "./pages/Alerts.jsx";
import { Grids } from "./pages/Grids.jsx";
import { Home } from "./pages/Home.jsx";
import { BoxModel } from "./pages/BoxModel.jsx";
import { Zindex } from "./pages/Zindex.jsx";
import { Display } from "./pages/Display.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/accordions", element: <Accordions /> },
  { path: "/dropdown", element: <DropdownMenu /> },
  { path: "/verticalNav", element: <VerticalNavBar /> },
  { path: "/horizontalNav", element: <HorizontalNavBar /> },
  { path: "/tabs", element: <Tabs /> },
  { path: "/buttons", element: <Buttons /> },
  { path: "/forms", element: <Forms /> },
  { path: "/cards", element: <Cards /> },
  { path: "/alerts", element: <Alerts /> },
  { path: "/grids", element: <Grids /> },
  { path: "/box-model", element: <BoxModel /> },
  { path: "/z-index", element: <Zindex /> },
  { path: "/display", element: <Display /> },
];

export default routes;
