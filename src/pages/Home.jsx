export const Home = () => {
  return (
    <section
      className="w-full h-full  m-0 p-0 relative"
      style={{
        backgroundImage: "url('/styleCSS.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <article className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
        <div className="bg-green-500 w-[50%] h-10 text-center">
          CSS Information
        </div>
        <div>
          <pre className="bg-[#1b1b1ba2] text-white p-4 rounded-lg overflow-x-auto text-[0.9rem] shadow-lg">
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
