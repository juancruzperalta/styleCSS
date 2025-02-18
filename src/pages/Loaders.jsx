export const Loaders = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Loaders
        </h2>
        <h4 className="text-xl">
          How to create a loader. Using a svg, or using a style css.
        </h4>

        <article className="mt-6 grid grid-cols-1 items-center justify-center w-full h-full p-0 m-0 gap-3 text-[1rem] ">
          <h4 className="text-yellow-300 text-xl">This loader is a SVG...</h4>
          <div>
            <svg
              className="w-16 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="40"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </circle>
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="100"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </circle>
              <circle
                fill="#FF156D"
                stroke="#FF156D"
                stroke-width="15"
                r="15"
                cx="160"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="2"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </circle>
            </svg>
          </div>
          <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
            <code>
              <span className="text-blue-300">
                &lt;div&gt;<span className="text-white">Choose the SVG</span>
              </span>

              <span className="text-blue-300">&lt;/div&gt;</span>
            </code>
          </pre>
          <h4 className="text-yellow-300 text-xl">
            {" "}
            The loader is using a CSS
          </h4>
          <div className="border-8 border-t-red-500 border-t-8 rounded-full w-40 h-40 animate-spin"></div>
          <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
            <code>
              <span className="text-blue-300">
                &lt;div <span className="text-green-300">class="loader"</span>
                &gt;
              </span>
              <span className="text-blue-300">&lt;div&gt;</span>
              <br />
              <span className="text-yellow-300">.loader</span> {"{"} <br />
              &nbsp;
              <span className="text-gray-300">border: 8px solid gray</span>
              <br />
              &nbsp;
              <span className="text-gray-300">border-top: 8px solid red</span>
              <br />
              &nbsp;
              <span className="text-gray-300">border-radius: 100%</span>
              <br />
              &nbsp;
              <span className="text-gray-300">width: 40px</span>
              <br />
              &nbsp;
              <span className="text-gray-300">height: 40px</span>
              <br />
              {"}"}
            </code>
          </pre>
        </article>
      </div>
    </section>
  );
};
