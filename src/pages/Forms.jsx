export const Forms = () => {
  return (
    <section className="flex flex-col mt-8  lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Forms</h2>
        <h4 className="text-xl">
          {" "}
          This is a demostration how to used a input. The components is already
          to copy in the footer.
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] ">
          <div className="flex flex-col w-full mt-4 gap-8">
            <div className="flex flex-col justify-between h-full w-full">
              <h3 className="text-yellow-300 font-bold text-xl">Input</h3>
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="FirstName"
                  className="w-[260px] outline-none h-8 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="LastName"
                  className="w-[260px] outline-none h-8 rounded-sm"
                />
              </form>
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <h3 className="text-yellow-300 font-bold text-xl">
                Input Search
              </h3>
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[260px] outline-none h-8 rounded-sm focus:w-full focus:bg-slate-200 transition-[width] ease-in-out"
                />
              </form>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
