export const TextShadow = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Text-Shadow
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

        <article className="mt-6 grid grid-cols-[1fr,1fr] items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              text-shadow: 2px 2px 4px red;
            </span>
          </div>
          <h2 className="text-2xl" style={{ textShadow: "2px 2px 4px red" }}>
            Hello my friend!
          </h2>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              text-shadow: 6px 4px 4px green;
            </span>
          </div>
          <h2 className="text-2xl" style={{ textShadow: "6px 4px 4px green" }}>
            Hello my friend!
          </h2>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              text-shadow: 0px 0px 4px green, 0px 0px 4px green;
            </span>
          </div>
          <h2
            className="text-2xl"
            style={{
              textShadow: "0px 0px 4px green, 0px 0px 4px green",
            }}
          >
            Hello my friend!
          </h2>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black  rounded-sm p-1 w-max">
              text-shadow: 5px 5px #1e40af;
            </span>
          </div>
          <p
            style={{
              textShadow: "5px 5px #1e40af",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            dolorum sed eius fugiat nemo cumque minima dignissimos rerum
            distinctio minus quia commodi dolores amet vitae, iure ad aliquam!
            Magnam, doloremque!
          </p>
          <div className="flex flex-col  gap-2">
            <span className="bg-red-300 text-black rounded-sm p-1 w-max">
              text-shadow: 1px 1px 2px red;
            </span>
          </div>
          <p
            style={{
              textShadow: "1px 1px 2px red",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            dolorum sed eius fugiat nemo cumque minima dignissimos rerum
            distinctio minus quia commodi dolores amet vitae, iure ad aliquam!
            Magnam, doloremque!
          </p>
        </article>
      </div>
    </section>
  );
};
