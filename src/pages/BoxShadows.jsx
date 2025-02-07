export const BoxShadows = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Box-Shadow
        </h2>
        <h4 className="text-xl">
          This property add new shadow effects to box around the elements..
        </h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
          <code>
            <span className="text-blue-300">box-shadow</span>:
            <span className="text-gray-300">&nbsp; 10px, 5px, 5px, red</span>
          </code>
        </pre>

        <article className="mt-6 grid grid-cols-1 md:grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.6);
            </span>
          </div>
          <div className="bg-blue-500 flex items-center justify-center shadow-lg shadow-red-600 h-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit....
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              box-shadow: 0 10px 15px -3px #6b7280
            </span>
          </div>
          <div className="bg-blue-500 flex items-center justify-center shadow-lg shadow-gray-500 h-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit....
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              box-shadow: -5px -5px 5px #6b7280
            </span>
          </div>
          <div
            className="bg-blue-500 flex items-center justify-center  h-14"
            style={{ boxShadow: "-5px -5px 5px #6b7280" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit....
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              box-shadow: -5px -5px 5px 5px #6b7280;
            </span>
          </div>
          <div
            className="bg-blue-500 flex items-center justify-center  h-14"
            style={{ boxShadow: "-5px -5px 5px 5px #6b7280" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit....
          </div>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              box-shadow: 0 0 5px 5px #6b7280;
            </span>
          </div>
          <div
            className="bg-blue-500 flex items-center justify-center  h-14"
            style={{ boxShadow: "0 0 5px 5px #6b7280" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit....
          </div>
        </article>
      </div>
    </section>
  );
};
