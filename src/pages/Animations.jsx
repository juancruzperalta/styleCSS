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
        <article className="mt-6 grid grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-4 text-[0.9rem]">
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
        </article>
      </div>
    </section>
  );
};
