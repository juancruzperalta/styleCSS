export const Zindex = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Z-index
        </h2>
        <h4 className="text-xl">
          {" "}
          This is a demostration how to used a z-index in css, the z-index
          consists in position the element about other element.
        </h4>
        <article
          className="flex flex-col
       justify-between items-center w-full h-full p-0 m-0 "
        >
          <div className="flex flex-col w-full mt-4 gap-8">
            <div className="flex flex-col justify-between h-full w-full"></div>
          </div>
        </article>
      </div>
    </section>
  );
};
