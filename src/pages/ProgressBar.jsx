export const ProgressBar = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Progress Bar
        </h2>
        <h4 className="text-xl">-</h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
          <code>
            <span className="text-blue-300">-</span>:
            <span className="text-gray-300">&nbsp; -</span>
          </code>
        </pre>

        <article className="mt-6 grid grid-cols-1 items-center justify-center w-full h-full p-0 m-0 gap-3 text-[1rem]">
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "75%" }}
            >
              <span className="font-bold text-gray-900">75%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "50%" }}
            >
              <span className="font-bold text-gray-900">50%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "25%" }}
            >
              <span className="font-bold text-gray-900">25%</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
