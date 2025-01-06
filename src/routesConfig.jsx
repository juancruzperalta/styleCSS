import { Accordions } from "./pages/Accordions.jsx";
import { DropdownMenu } from "./pages/DropdownMenu.jsx";
import { VerticalNavBar } from "./pages/VerticalNavBar.jsx";
import { HorizontalNavBar } from "./pages/HorizontalNavBar.jsx";
import { Tabs } from "./pages/Tabs.jsx";

const routes = [
  { path: "/accordions", element: <Accordions /> },
  { path: "/dropdown", element: <DropdownMenu /> },
  { path: "/verticalNav", element: <VerticalNavBar /> },
  { path: "/horizontalNav", element: <HorizontalNavBar /> },
  { path: "/tabs", element: <Tabs /> },
];

export default routes;
