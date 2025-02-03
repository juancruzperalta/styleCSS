export const Display = () => {
  function addDisplayNone() {
    const elementNone = document.querySelector(".elementNone");
    if (elementNone.classList.contains("hidden")) {
      elementNone.classList.remove("hidden");
    } else {
      elementNone.classList.add("hidden");
    }
  }
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Display
        </h2>
        <h4 className="text-xl">
          {" "}
          The display are show changes where you click in the button.
        </h4>
        <article>
          <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg">
            <code>
              <span className="text-blue-300">display</span>: none;{" "}
              <span className="text-gray-500">
                {" "}
                /* the element is completely removed*/
              </span>
              <br />
              <span className="text-blue-300">display</span>: block;{" "}
              <span className="text-gray-500">
                /* allows an element to behave like a block-level element*/
              </span>
              <br />
              <span className="text-blue-300">display</span>: inline;{" "}
              <span className="text-gray-500">
                {" "}
                /* allows an element to behave like a block-level element*/
              </span>
              <br />
              <span className="text-blue-300">display</span>: inline-block;{" "}
              <span className="text-gray-500">
                /* formats the element as inline-level but also allows to <br />
                set height/width like block-level element*/
              </span>
              <br />
              <span className="text-blue-300">display</span>: flex;{" "}
              <span className="text-gray-500">
                /* sets the element as a flex container to have a flexible
                layout of its child elements*/
              </span>
              <br />
              <span className="text-blue-300">display</span>: grid;{" "}
              <span className="text-gray-500">
                /*sets the element as a grid container to create complex layouts
                */
              </span>
            </code>
          </pre>
        </article>
        <article
          className="flex flex-col
          justify-between items-center w-full h-full p-0 m-0 "
        >
          <div className="flex flex-col w-full mt-4">
            <h2 className="text-yellow-300 font-bold text-xl mt-4">Examples</h2>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display None
              </h2>
              <h4 className="text-gray-200">
                The element is completely removed
              </h4>
              <div className="grid grid-cols-[0.15fr,1fr,1fr] lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 ">
                <button
                  className="bg-yellow-300 p-2 rounded-lg border-none text-black h-full"
                  onClick={addDisplayNone}
                >
                  Click
                </button>
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    none;
                    <br />
                    {"}"}
                  </code>
                </pre>
                <div className="bg-blue-300 text-black rounded-lg w-full h-full p-2 elementNone">
                  This is a div that contains a class to press the button to
                  hide the element.
                </div>
              </div>
            </article>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display Block
              </h2>
              <h4 className="text-gray-200">
                Displays an element as a block element
              </h4>
              <div className="lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 w-full">
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg w-full">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    block;
                    <br />
                    {"}"}
                  </code>
                </pre>
                <div className="bg-blue-300 text-black rounded-lg w-full h-full p-2 block mt-2">
                  This is a block element
                </div>
                <div className="bg-blue-300 text-black rounded-lg w-full h-full p-2 block mt-2">
                  This is a block element
                </div>
              </div>
            </article>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display Inline
              </h2>
              <h4 className="text-gray-200">
                Displays an element as a inline element
              </h4>
              <div className="lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 w-full">
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg w-full">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    inline;
                    <br />
                    {"}"}
                  </code>
                </pre>
                <div className="bg-blue-300 text-black rounded-lg w-full h-full p-2 inline mt-2">
                  This is a inline element
                </div>
                <div className="bg-blue-300 text-black rounded-lg w-full h-full p-2 inline mt-2">
                  This is a inline element
                </div>
              </div>
            </article>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display Inline-Block
              </h2>
              <h4 className="text-gray-200">
                Displays an element as a inline-block element
              </h4>
              <div className="lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 w-full">
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg w-full">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    inline-block;
                    <br />
                    {"}"}
                  </code>
                </pre>
                <div className="bg-blue-300 text-black rounded-lg w-[100px] p-2 inline-block mt-2">
                  inline block
                </div>
                <div className="bg-blue-300 text-black rounded-lg w-[100px] p-2 inline-block mt-2">
                  This is a inline block element
                </div>
              </div>
            </article>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display Flex
              </h2>
              <h4 className="text-gray-200">
                Displays an element as a flex element
              </h4>
              <div className="lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 w-full">
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg w-full">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    flex;
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-blue-300">flex-direction</span>: row;{" "}
                    <span className="text-gray-500">
                      /*the direction of elements is row (default)/*
                    </span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-blue-300">flex-direction</span>:
                    column;{" "}
                    <span className="text-gray-500">
                      /*the direction of elements is column/*
                    </span>
                    <br />
                    {"}"}
                  </code>
                </pre>
                <div className="flex gap-2">
                  <div className="bg-blue-300 text-black rounded-lg w-[100px]  p-2 mt-2">
                    flex 1
                  </div>
                  <div className="bg-blue-300 text-black rounded-lg w-[100px] p-2 mt-2">
                    flex 2
                  </div>
                </div>
              </div>
            </article>
            <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
              <h2 className="text-yellow-300 font-bold text-xl">
                Display Grid
              </h2>
              <h4 className="text-gray-200">Displays an element as a grid.</h4>
              <div className="lg:flex-row lg:justify-center lg:items-center gap-4 mt-2 w-full">
                <pre className="bg-[#1b1b1b]  text-white p-4 rounded-lg shadow-lg w-full">
                  <code>
                    <span className="text-yellow-300">.div</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                    grid;
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-blue-300">grid-template-columns</span>
                    : repeat(2, minmax(0, 1fr)); <br />
                    &nbsp;&nbsp;
                    <span className="text-blue-300">grid-template-rows</span>:
                    repeat(2, minmax(0, 1fr)); <br />
                    {"}"}
                  </code>
                </pre>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-">
                  <div className="bg-blue-300 text-black rounded-lg w-full  p-2 mt-2">
                    Grid 1
                  </div>
                  <div className="bg-blue-300 text-black rounded-lg w-full p-2 mt-2">
                    Grid 2
                  </div>
                  <div className="bg-blue-300 text-black rounded-lg w-full p-2 mt-2">
                    Grid 3
                  </div>
                  <div className="bg-blue-300 text-black rounded-lg w-full p-2 mt-2">
                    Grid 3
                  </div>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};
