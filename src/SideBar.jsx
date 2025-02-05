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
      { name: "X Animations", href: "/animations" },
      { name: "X Hover Effects", href: "/hover-effects" },
      { name: "X Modals", href: "/modals" },
      { name: "Accordions", href: "/accordions" },
      { name: "X Scroll Effects", href: "/scroll-effects" },
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
    const sideBarMenu = document.querySelector("#sideBarMenu");
    const sidebarStyle = document.querySelector(".sidebar");

    if (sideBarMenu.classList.contains("-translate-x-[115%]")) {
      sideBarMenu.classList.remove("-translate-x-[115%]");
      sidebarStyle.classList.add("sidebarStyle");
    } else {
      sideBarMenu.classList.add("-translate-x-[115%]");
      sidebarStyle.classList.remove("sidebarStyle");
    }
  };
  return (
    <div className="sidebar fixed h-screen md:border-r-2 md:border-slate-100 md:border-opacity-20 overflow-auto pb-4  md:bg-[var(--bg-sidebar)] ">
      <button
        className=" md:hidden pointer w-10 h-10 fill-white"
        onClick={viewTheSideBar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <ul
        className="md:translate-x-0 -translate-x-[115%] mb-10"
        id="sideBarMenu"
      >
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
  );
}

export default SideBar;
