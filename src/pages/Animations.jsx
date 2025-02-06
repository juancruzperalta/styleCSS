export const Animations = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Animations
        </h2>
        <h4 className="text-xl">
          {" "}
          An animation lets an element gradually change from one style to
          another.
        </h4>
        <h2 className="text-yellow-300 font-bold text-2xl mt-4 mb-4">
          Properties
        </h2>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg overflow-x-auto">
          <ul>
            <li>
              animation-name{" "}
              <span className="text-gray-500">
                /*css property specifies the names of one or more.*/
              </span>
            </li>
            <li>
              animation-direction{" "}
              <span className="text-gray-500">
                /*property sets whether an animation should the direction*/
              </span>
            </li>
            <li>
              animation-duration{" "}
              <span className="text-gray-500">
                /*the duration of transition effect*/
              </span>
            </li>
            <li>
              animation-timing-function{" "}
              <span className="text-gray-500">
                /*specifies the speed curve of the animatio*/
              </span>
            </li>
            <li>
              animation-delay{" "}
              <span className="text-gray-500">
                /*specifies a delay for the start of an animation*/
              </span>
            </li>
          </ul>
        </pre>
        <article className="mt-6 grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-4 text-[1rem]">
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              animation: slidein 3s ease-in infinite;
            </span>
            <p className="text-[0.97rem]">
              The animation will moving (100px) in 3s during infinite and move
              ease-in.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full "
              style={{
                animation: "slidein 3s ease-in infinite",
              }}
            ></div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              animation: slidein 3s ease-in-out infinite alternate;
            </span>
            <p className="text-[0.97rem]">
              The animation will moving (100px) in 3s during infinite and move
              ease-in-out.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full "
              style={{
                animation: "slidein 3s ease-in-out infinite alternate",
              }}
            ></div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              animation: slidein 3s ease-in-out infinite alternate;
            </span>
            <p className="text-[0.97rem]">
              The animation will moving (100px) in 3s during infinite and move
              ease-in-out.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full "
              style={{
                animation: "slidein 3s linear infinite alternate",
              }}
            ></div>
          </div>

          <div className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mb-6 mt-4 max-w-full text-[1rem]">
            <p className="text-gray-300">
              <span className="text-orange-400">@keyframes </span>
              is a CSS rule used to define an animation, the animation will
              gradually change from the current style to the new style at
              certain times.
            </p>
          </div>
          <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mb-6 mt-4">
            <code>
              <span className="text-red-300">
                @keyframes <span className="text-orange-400">slidein</span>
              </span>{" "}
              {"{"} <br />
              <span className="text-gray-100">0%</span> {"{"} <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">transform</span>
              :&nbsp;
              <span className="text-gray-100">translateX(0%);</span>
              <br />
              &nbsp;{"}"}
              <br />
              <span className="text-gray-100">100%</span> {"{"} <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">transform</span>
              :&nbsp;
              <span className="text-gray-100">translateX(100%);</span>
              <br />
              &nbsp;{"}"}
              <br />
              {"}"}
            </code>
          </pre>
        </article>
        <article className="mt-6 grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-4 text-[1rem]">
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              animation: slideUp 3s ease-in infinite;
            </span>
            <p className="text-[0.97rem]">
              The animation will moving (100px) in 3s during infinite and move
              ease-in.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2 shadow-lg h-[140px]">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full "
              style={{
                animation: "slideUp 3s ease-in infinite",
              }}
            ></div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-green-300 text-black rounded-sm p-1 w-max">
              animation: slideUp 3s ease-in-out infinite alternate;
            </span>
            <p className="text-[0.97rem]">
              The animation will moving (100px) in 3s during infinite and move
              ease-in-out.
            </p>
          </div>
          <div className="bg-gray-600/60 rounded-sm p-2  shadow-lg h-[140px]">
            <div
              className="bg-blue-500 font-semibold p-1 flex items-center justify-center w-[80px] h-[80px] rounded-full "
              style={{
                animation: "slideUp 3s ease-in-out infinite alternate",
              }}
            ></div>
          </div>

          <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mb-6 mt-4">
            <code>
              <span className="text-red-300">
                @keyframes <span className="text-orange-400">slidein</span>
              </span>{" "}
              {"{"} <br />
              <span className="text-gray-100">0%</span> {"{"} <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">transform</span>
              :&nbsp;
              <span className="text-gray-100">translateY(0%);</span>
              <br />
              &nbsp;{"}"}
              <br />
              <span className="text-gray-100">100%</span> {"{"} <br />
              &nbsp;&nbsp;
              <span className="text-blue-300">transform</span>
              :&nbsp;
              <span className="text-gray-100">translateY(100%);</span>
              <br />
              &nbsp;{"}"}
              <br />
              {"}"}
            </code>
          </pre>
        </article>
      </div>
    </section>
  );
};
