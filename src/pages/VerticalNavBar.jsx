import { CopyTheText } from "./helpers/CopyTheText";

export const VerticalNavBar = () => {
  const codeText = `<style>
    nav{
      display: flex;
      flex-direction: column;
      width: 240px;
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
    .active{
      background-color: #22c55e;
    }
  </style>
<div>
  <nav>
    <li class="active navigation" onClick={activeObject}>
      <a href="#home">Home</a>
    </li>
    <li class="navigation" onClick={activeObject}>
      <a href="#about">About</a>
    </li>
    <li class="navigation" onClick={activeObject}>
      <a href="#profile">Profile</a>
    </li>
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
</script>`;
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
    <section className="homeSection">
      <style>
        {`
          .navigation.active {
            background-color: #22c55e;
          }
        `}
      </style>
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <div className="mb-8  w-full">
          <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
            Navigation Bars
          </h2>
          <h4 className="text-xl">
            How to build vertical navbar, styled a <a></a> and the used ACTIVE
            to show the active link in this moment. The styled and script used
            is very easy and understabled
          </h4>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col">
            <h3 className="text-yellow-300 font-bold text-2xl mb-4">
              Vertical Nav
            </h3>
            <article className="flex items-center justify-between w-full h-full p-0 m-0 l">
              <div>
                <nav className="flex flex-col w-60">
                  <li
                    className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-gray-400 navigation active cursor-pointer"
                    onClick={activeObject}
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li
                    className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-gray-400  navigation cursor-pointer"
                    onClick={activeObject}
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-gray-400  navigation cursor-pointer"
                    onClick={activeObject}
                  >
                    <a href="#profile">Profile</a>
                  </li>
                  <li
                    className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-gray-400  navigation cursor-pointer"
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
      </div>
    </section>
  );
};
