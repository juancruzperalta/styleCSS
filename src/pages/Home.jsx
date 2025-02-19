export const Home = () => {
  return (
    <section
      className="
      w-full md:h-full h-screen m-0 p-0 relative bg-none md:bg-[url('/styleCSS.jpg')] md:bg-cover md:bg-center"
    >
      <article className="flex flex-col md:flex-row items-center justify-center md:absolute top-0 left-0 right-0 bottom-0 gap-8 md:gap-0 mt-4 md:mt-0">
        <div className="flex flex-col items-center justify-center mr-4 gap-8">
          <h2 className="bg-[#1b1b1b] text-3xl p-3 font-bold  rounded-sm">
            CSS Information
          </h2>
          <div className="pointer text-[#1b1b1b] text-xl font-semibold rounded-sm">
            <span className="border-r-2 border-gray-700 p-2 bg-[#f8f6f6]">
              Version 1.1
            </span>
            <span className="p-2 bg-[#f8f6f6]">2025</span>
          </div>
        </div>
        <div>
          <pre className="bg-[#1b1b1be5] text-white p-3 rounded-lg overflow-x-auto text-[1rem] shadow-lg">
            <code>
              <span className="text-yellow-300">.styleCSS</span> {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-blue-300">Accordions</span>:
              true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Alerts</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Animations</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">BoxModel</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">BoxShadows</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Buttons</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Cards</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Display</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">DropdownMenu</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Forms</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Grids</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Horizontal NavBar</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Vertical NavBar</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Loaders</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Modals</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Progress Bar</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Scroll Effects</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Tabs</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Text Shadows</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Transitions</span>: true;
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">Z-Index</span>: true;
              <br />
              {"}"}
            </code>
          </pre>
        </div>
      </article>
    </section>
  );
};
