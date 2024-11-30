export const Accordions = () => {
  return (
    <section className="flex items-center justify-center mt-4">
      <div className="">
        <h2>Accordions</h2>
        <h4>How to use the accordion </h4>

        <details
          className="w-[700px] border max-w-[700px] rounded-md bg-gray-700 p-1"
          open
        >
          <summary className="font-semibold">Title example</summary>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            magnam veniam eaque excepturi. Placeat ut asperiores nemo la..
          </p>
        </details>
      </div>
    </section>
  );
};
