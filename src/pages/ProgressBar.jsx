export const ProgressBar = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Progress Bar
        </h2>
        <h4 className="text-xl">
          The CSS text-shadow property applies shadow to text...
        </h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2">
          <code>
            <span className="text-blue-300">text-shadow</span>:
            <span className="text-gray-300">&nbsp; 5px 5px red;</span>
          </code>
        </pre>

        <article className="mt-6 grid grid-cols-1 md:grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <div className="">
            <div style={{width="100px"}}></div>
          </div>
        </article>
      </div>
    </section>
  );
};
