import { CopyTheText } from "./helpers/CopyTheText";
export const HorizontalNavBar = () => {
  const codeText = `<style>
    nav{
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 500px;
      background-color: #e2e8f0;
    }
    li{
      list-style-type: none;
      background-color: #e2e8f0;
      color: #0f172a;
      cursor:pointer;
      padding: 10px;
    }
    li a{
      text-decoration: none;
      color: #0f172a;
    }
    li:hover{
      background-color:#9ca3af;
    }
    .divContent{
      display:flex;
    }
    .active{
      background-color: #22c55e;
    }
  </style>
<div>
<nav>
  <div class="divContent">
      <li class="active navigation" onClick={activeObject}>
        <a href="#home">Home</a>
      </li>
      <li class="navigation" onClick={activeObject}>
        <a href="#about">About</a>
      </li>
      <li class="navigation" onClick={activeObject}>
        <a href="#profile">Profile</a>
      </li>
  </div>
    <li class="navigation" onClick={activeObject}>
      <a href="#contact">Contact</a>
    </li>
  </nav>
</div>
<script>
  const objectClick =document.querySelectorAll(".navigation");
    objectClick.forEach((item) => {
      item.addEventListener("click", () => {
        objectClick.forEach((el) => {
          el.classList.remove("active")
        });
      item.classList.add("active");
      });
  });
</script>
`;
  const activeObject = (e) => {
    const objectClick = document.querySelectorAll(".navigation");
    objectClick.forEach((el) => el.classList.remove("active"));

    const parentElement = e.currentTarget;
    if (parentElement.classList.contains("navigation")) {
      parentElement.classList.add("active");
    }
    const link = parentElement.querySelector("a");
    if (link) {
      link.click();
    }
  };

  return (
    <section className="flex flex-col mt-8  lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
      <style>
        {`
          .navigation.active {
            background-color: #22c55e;
          }
        `}
      </style>
      <div className="mb-8 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">
          Navigation Bars
        </h2>
        <h4 className="text-xl">
          How to use the navigation bars, click in the ancord for go to this
          page. Click in the bars to desployment the menu for more pages.
        </h4>
      </div>
      <div className="flex gap-12 items-center">
        <div className="flex flex-col w-full">
          <h3 className="text-yellow-300 font-bold text-2xl mb-4">
            Horizontal Nav
          </h3>
          <article className="flex items-center bg-slate-200 justify-between w-full h-full p-0 m-0 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
            <div className="w-full">
              <nav className="flex w-full h-full items-center justify-between">
                <div className="flex">
                  <li
                    className="navigation list-none  p-2 text-slate-900 hover:bg-gray-400 active cursor-pointer "
                    onClick={activeObject}
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li
                    className="navigation list-none  p-2 text-slate-900 hover:bg-gray-400  cursor-pointer"
                    onClick={activeObject}
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className="navigation list-none  p-2 text-slate-900 hover:bg-gray-400   cursor-pointer"
                    onClick={activeObject}
                  >
                    <a href="#profile">Profile</a>
                  </li>
                </div>
                <li
                  className="navigation list-none  p-2 text-slate-900 hover:bg-gray-400   cursor-pointer "
                  onClick={activeObject}
                >
                  <a href="#contact">Contact</a>
                </li>
              </nav>
            </div>
          </article>
        </div>
      </div>
      <CopyTheText codeText={codeText} />
    </section>
  );
};
