export const Modals = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Modals
        </h2>
        <h4 className="text-xl">....</h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
          <code>
            <h2 className="text-xl text-orange-500 font-semibold ">HTML</h2>
            <span className="text-[#569CD6]">
              &lt;button{" "}
              <span className="text-[#9CDCFE]">
                id=<span className="text-[#CE9178]">"openModal"</span>
              </span>
              &gt;
            </span>
            <span>Open Modal</span>{" "}
            <span className="text-[#569CD6]">&lt;/button&gt;</span>
            <br />
            &nbsp;
            <span className="text-[#569CD6]">
              &lt;div{" "}
              <span className="text-[#9CDCFE]">
                class=<span className="text-[#CE9178]">"modal"</span>
              </span>
              &gt;
            </span>{" "}
            <br />
            &nbsp;&nbsp;
            <span className="text-[#569CD6]">
              &lt;div{" "}
              <span className="text-[#9CDCFE]">
                class=<span className="text-[#CE9178]">"contentModal"</span>
              </span>
              &gt;
            </span>{" "}
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className="text-[#569CD6]">
              &lt;p&gt;{" "}
              <span className="text-white p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                eaque fuga vel in
              </span>
            </span>{" "}
            <span className="text-[#569CD6]">&lt;/p&gt;</span>
            <br />
            &nbsp;&nbsp;
            <span className="text-[#569CD6]">&lt;/div&gt;</span>
            <br />
            <span className="text-[#569CD6]">&lt;/div&gt;</span>
          </code>
        </pre>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
          <code>
            <h2 className="text-xl text-orange-500 font-semibold ">CSS</h2>
            <span className="text-[#569CD6]">
              &lt;button{" "}
              <span className="text-[#9CDCFE]">
                id=<span className="text-[#CE9178]">"openModal"</span>
              </span>
              &gt;
            </span>
            <span>Open Modal</span>{" "}
            <span className="text-[#569CD6]">&lt;/button&gt;</span>
            <br />
            &nbsp;
            <span className="text-[#569CD6]">
              &lt;div{" "}
              <span className="text-[#9CDCFE]">
                class=<span className="text-[#CE9178]">"modal"</span>
              </span>
              &gt;
            </span>{" "}
            <br />
            &nbsp;&nbsp;
            <span className="text-[#569CD6]">
              &lt;div{" "}
              <span className="text-[#9CDCFE]">
                class=<span className="text-[#CE9178]">"contentModal"</span>
              </span>
              &gt;
            </span>{" "}
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className="text-[#569CD6]">
              &lt;p&gt;{" "}
              <span className="text-white p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                eaque fuga vel in
              </span>
            </span>{" "}
            <span className="text-[#569CD6]">&lt;/p&gt;</span>
            <br />
            &nbsp;&nbsp;
            <span className="text-[#569CD6]">&lt;/div&gt;</span>
            <br />
            <span className="text-[#569CD6]">&lt;/div&gt;</span>
          </code>
        </pre>
        <article className="mt-6 grid grid-cols-1  items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
            Example
          </h2>
          <button>Open Modal</button>
          <div className=" bg-[#00000084] fixed w-full h-full left-0 top-0 right-0 bottom-0 z-10 flex items-center justify-center">
            <div className="bg-white flex items-center flex-col justify-center w-[340px] h-56 rounded-sm relative">
              <div className="w-[80%] flex flex-col items-center">
                <span className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center absolute -top-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-10 h-10"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span>
                <p className="text-black p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...!
                </p>
                <button className="bg-green-400 p-2 mt-2 text-black rounded-md w-full">
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
