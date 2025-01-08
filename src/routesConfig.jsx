import { Accordions } from "./pages/Accordions.jsx";
import { DropdownMenu } from "./pages/DropdownMenu.jsx";
import { VerticalNavBar } from "./pages/VerticalNavBar.jsx";
import { HorizontalNavBar } from "./pages/HorizontalNavBar.jsx";
import { Tabs } from "./pages/Tabs.jsx";
import { Buttons } from "./pages/Buttons.jsx";
import { Forms } from "./pages/Forms.jsx";
import { Cards } from "./pages/Cards.jsx";

const routes = [
  { path: "/accordions", element: <Accordions /> },
  { path: "/dropdown", element: <DropdownMenu /> },
  { path: "/verticalNav", element: <VerticalNavBar /> },
  { path: "/horizontalNav", element: <HorizontalNavBar /> },
  { path: "/tabs", element: <Tabs /> },
  { path: "/buttons", element: <Buttons /> },
  { path: "/forms", element: <Forms /> },
  { path: "/cards", element: <Cards /> },
];

export default routes;
