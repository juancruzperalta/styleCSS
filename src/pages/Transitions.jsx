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
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg overflow-x-auto">
          <ul>
            <li>
              transition{" "}
              <span className="text-gray-500">
                /*set a four propierties into the single propierty.*/
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
        <article className="mt-6 grid grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-4 text-[0.9rem]">
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              transition-delay: 1s
            </span>
            <p className="text-[0.97rem]">The transition will wait 1second.</p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full delay-[1s] duration-1000">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              transition-delay: 3s
            </span>
            <p className="text-[0.97rem]">The transition will wait 3 second.</p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg min-w-min">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full delay-[3s] duration-1000">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              transition-duration: 0s
            </span>
            <p className="text-[0.97rem]">
              The transition will during 0second (instant)
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full duration-0">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              transition-duration: 3s
            </span>
            <p className="text-[0.97rem]">The transition will during 3second</p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full duration-[3s]">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-blue-300 text-black rounded-sm p-1 w-max">
              transition-property: background
            </span>
            <p className="text-[0.97rem]">
              The element will only transtion the background property
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-[background-color] hover:bg-green-500 duration-[3s]">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-blue-300 text-black rounded-sm p-1 w-max">
              transition-property: transform
            </span>
            <p className="text-[0.97rem]">
              The element will only transtion the transform property
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-[transform] hover:translate-x-full duration-[2s]">
              Hover Me
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: ease;
            </span>
            <p className="text-[0.97rem]">
              The transition starts slowly, accelerates in the middle, and slows
              down at the end.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full ease duration-1000">
              Hover Me
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: ease-in;
            </span>
            <p className="text-[0.97rem]">
              Starts off slowly, with the transition speed increasing until
              complete.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full  ease-in duration-1000">
              Hover Me
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: ease-out;
            </span>
            <p className="text-[0.97rem]">
              Starts transitioning quickly, slowing down as the transition
              continues.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full  ease-out duration-1000">
              Hover Me
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: ease-in-out;
            </span>
            <p className="text-[0.97rem]">
              The transition starts quickly, and decelerates gradually until the
              end
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full  ease-in-out duration-1000">
              Hover Me
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: linear;
            </span>
            <p className="text-[0.97rem]">
              The transition has a constant speed.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full linear duration-1000">
              Hover Me
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="bg-yellow-300 text-black rounded-sm p-1 w-max">
              transition-timing-function: steps(4, end);
            </span>
            <p className="text-[0.97rem]">
              You can define a specific number of steps before reaching the end.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full transition-all hover:translate-x-full  duration-1000"
              style={{ transitionTimingFunction: "steps(4, end)" }}
            >
              Hover Me
            </div>
          </div>
        </article>
        <article className="flex flex-col w-full h-full p-0 m-0 gap-4 text-[0.9rem]">
          <h2 className="text-yellow-300 font-bold text-2xl mt-4">Examples</h2>
          <div className="flex items-center gap-2">
            <pre className="bg-[#1b1b1b] text-white p-2 rounded-md shadow-lg">
              <code>
                <span className="text-blue-300 ">transition</span>: width 1s
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
