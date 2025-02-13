import { Link } from "react-router-dom";

const categories = [
  {
    title: "Nav and Menu",
    items: [
      { name: "Dropdown Menu", href: "/dropdown" },
      { name: "Vertical NavBar", href: "/verticalNav" },
      { name: "Horizontal NavBar", href: "/horizontalNav" },
      { name: "Tabs", href: "/tabs" },
    ],
  },
  {
    title: "Design and Structure",
    items: [
      { name: "Grids", href: "/grids" },
      { name: "Box Model", href: "/box-model" },
      { name: "zIndex", href: "/z-index" },
      { name: "Display", href: "/display" },
      { name: "Box-Shadows", href: "/box-shadows" },
      { name: "Text-Shadows", href: "/text-shadows" },
    ],
  },
  {
    title: "Animations",
    items: [
      { name: "Transitions", href: "/transitions" },
      { name: "Animations", href: "/animations" },
      { name: "Modals", href: "/modals" },
      { name: "Accordions", href: "/accordions" },
      { name: "Scroll Effects", href: "/scroll-effects" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Buttons", href: "/buttons" },
      { name: "Forms", href: "/forms" },
      { name: "Cards", href: "/cards" },
      { name: "Alerts", href: "/alerts" },
      { name: "X Progress Bar", href: "/progress-bar" },
      { name: "X Loaders", href: "/loaders" },
    ],
  },
];
function SideBar() {
  const viewTheSideBar = () => {
    const sidebarStyle = document.querySelector(".sidebar");
    if (sidebarStyle.classList.contains("hidden")) {
      sidebarStyle.classList.remove("hidden");
    } else {
      sidebarStyle.classList.add("hidden");
    }
  };
  return (
    <section className="w-20">
      <div className="sidebar fixed hidden md:flex flex-col h-screen md:max-h-screen border-r-2 border-slate-100 border-opacity-20 overflow-y-auto pb-4 bg-[var(--bg-sidebar)] ">
        <ul className="mb-10" id="sideBarMenu">
          {categories.map((category, index) => (
            <li key={index} className="mb-4">
              <h3 className="px-1 py-2 text-yellow-300 font-bold text-[1.2rem]">
                {category.title}
              </h3>
              <ul>
                {category.items.map((x, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-700 rounded"
                    onClick={viewTheSideBar}
                  >
                    <Link
                      to={x.href}
                      className="block text-gray-100 font-semibold text-[1.02rem]"
                    >
                      - {x.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
