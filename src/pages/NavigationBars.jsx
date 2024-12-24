import { CopyTheText } from "./helpers/CopyTheText";

export const NavigationBars = () => {
  const codeText = `
`;
  const activeObject = () => {};

  return (
    <section className="flex flex-col  items-center mt-8">
      <div className="mb-8 max-w-[700px]">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">
          Navigation Bars
        </h2>
        <h4 className="text-xl">
          How to use the navigation bars, click in the ancord for go to this
          page. Click in the bars to desployment the menu for more pages.
        </h4>
      </div>
      <article className="flex items-center justify-between w-full h-full p-0 m-0 max-w-[700px]">
        <div>
          <nav className="flex flex-col w-60">
            <li className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-green-500">
              <a href="#home" onClick={activeObject}>
                Home
              </a>
            </li>
            <li className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-green-500 ">
              <a href="#about" onClick={activeObject}>
                About
              </a>
            </li>
            <li className="list-none bg-slate-200 p-2 text-slate-900 hover:bg-green-500 ">
              <a href="#contact" onClick={activeObject}>
                Contact
              </a>
            </li>
          </nav>
        </div>
      </article>
      <CopyTheText codeText={codeText} />
    </section>
  );
};
