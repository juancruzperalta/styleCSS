export const Transitions = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Transitions
        </h2>
        <h4 className="text-xl">
          {" "}
          CSS transitions allows you to change property values smoothly, over a
          given duration. Transitions enable you to define the transition
          between two states of an element.
        </h4>
        <h2 className="text-yellow-300 font-bold text-2xl mt-4 mb-4">
          Properties
        </h2>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg">
          <ul>
            <li>
              transition{" "}
              <span className="text-gray-500">
                /*set a four propierties into the single propierty. (property
                name|duration|easing function|delay)*/
              </span>
            </li>
            <li>
              transition-delay{" "}
              <span className="text-gray-500">/*the delay to transition*/</span>
            </li>
            <li>
              transition-duration{" "}
              <span className="text-gray-500">
                /*the duration of transition effect*/
              </span>
            </li>
            <li>
              transition-property{" "}
              <span className="text-gray-500">/*the name of property*/</span>
            </li>
            <li>
              transition-timing-function{" "}
              <span className="text-gray-500">
                /*specifies the speed curve of transition*/
              </span>
            </li>
          </ul>
        </pre>
        <article className="mt-2 flex flex-col w-full h-full p-0 m-0 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="bg-yellow-300 text-black rounded-sm p-1 ">
                transition-timing-function: ease;
              </span>
              <p>
                The transition starts slowly, accelerates in the middle, and
                slows down at the end.
              </p>
            </div>
            <div className="bg-gray-300 p-2">
              <div className="bg-blue-300 p-1 w-[80px] h-full">Hover Me</div>
            </div>
          </div>
        </article>
        <article className="flex flex-col w-full h-full p-0 m-0 gap-4">
          <h2 className="text-yellow-300 font-bold text-2xl mt-4">Examples</h2>
          <div className="flex items-center gap-2">
            <pre className="bg-[#1b1b1b] text-white p-2 rounded-md shadow-lg">
              <code>
                <span className="text-blue-300">transition</span>: width 1s
                ease;
              </code>
            </pre>
            <div className="bg-blue-500 rounded-md w-[320px] p-2 transition-[width] duration-1000 ease hover:w-[280px]">
              Hover to see the width transition
            </div>
          </div>
          <div className="flex items-center gap-2">
            <pre className="bg-[#1b1b1b] text-white p-2 rounded-md shadow-lg">
              <code>
                <span className="text-blue-300">transition</span>: width 0.5s 1s
                ease-in-out;
              </code>
            </pre>
            <div className="bg-blue-500 rounded-md w-[320px] p-2 transition-[width] duration-[0.5s] delay-[1s] ease-in-out hover:w-[260px]">
              Hover to see delay transition
            </div>
          </div>
          <div className="flex items-center gap-2">
            <pre className="bg-[#1b1b1b] text-white p-2 rounded-md shadow-lg">
              <code>
                <span className="text-blue-300">transition</span>:
                background-color 1s;
              </code>
            </pre>
            <div className="bg-blue-500 rounded-md w-[320px] p-2 transition-[background-color] duration-[1s] hover:bg-green-500">
              Hover to see the color transition
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
