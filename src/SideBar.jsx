import { Link } from "react-router-dom";

const links = [
  {
    name: "Accordions",
    href: "/accordions",
  },
  {
    name: "Dropdown Menu",
    href: "/dropdown",
  },
  {
    name: "Navigation bars",
    href: "/navigationBars",
  },
  {
    name: "Tabs",
    href: "/tabs",
  },
  {
    name: "Buttons",
    href: "/buttons",
  },
  {
    name: "Forms",
    href: "/forms",
  },
  {
    name: "Cards",
    href: "/cards",
  },
  {
    name: "Alerts",
    href: "/alerts",
  },
  {
    name: "Grids",
    href: "/grids",
  },
  {
    name: "Containers",
    href: "/containers",
  },
  {
    name: "Rows and Columns",
    href: "/rows-and-columns",
  },
  {
    name: "Spacing and margin",
    href: "/spacing-and-margin",
  },
  {
    name: "Transitions",
    href: "/transitions",
  },
  {
    name: "Animations",
    href: "/animations",
  },
  {
    name: "Hover Effects",
    href: "/hover-effects",
  },
  {
    name: "Modals",
    href: "/modals",
  },
  {
    name: "Progress Bar",
    href: "/progress-bar",
  },
];
function SideBar() {
  return (
    <div className="sidebar w-64 fixed bg-[var(--bg-sidebar)] h-screen border-r-2 border-slate-100 border-opacity-20 overflow-auto pb-4">
      <ul>
        {links.map((x, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-700 rounded">
            <Link to={x.href} className="block text-white">
              {x.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
