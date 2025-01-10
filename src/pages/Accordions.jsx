import { CopyTheText } from "./helpers/CopyTheText";

export const Accordions = () => {
  const codeText = `<style>
  details{
    max-width: 700px;
    border: 1px solid #f1f5f9;
    border-opacity: 80%;
    margin-top: .5rem;
    border-radius: .25rem;
    background-color: #1f2937;
  }
   summary{
    font-weight: 700;
     padding: 0.65rem .7rem;
     color:white;
   }
   p{
    padding: 0.1rem 1.5rem; 
   color: #d1d5db;
   }

    </style>
</head>
  <details open>
    <summary>Title example</summary>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      magnam veniam eaque excepturi. Placeat ut asperiores nemo la..
    </p>
  </details>
  `;

  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Accordions
        </h2>
        <h4 className="text-xl">
          This is a demonstration of how accordions can be used, in whatever
          style you want. The components is already to copy in the footer.
        </h4>

        <details
          className="border border-slate-100 border-opacity-80 w-full mt-4 rounded-md bg-gray-800 p-1"
          open
        >
          <summary className="font-semibold">Title example</summary>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            magnam veniam eaque excepturi. Placeat ut asperiores nemo la..
          </p>
        </details>
        {/* Example 2 */}
        <details className=" border border-slate-100 border-opacity-80 w-full mt-4 rounded-md bg-gray-800 p-1">
          <summary className="font-semibold">Example two</summary>
          <p className="m-1">
            Lorem ipsum dolor sit amet consectetur...
            <details className="border border-slate-100 border-opacity-80 w-full rounded-md bg-gray-800 p-1 ">
              <summary className="font-semibold">Example two</summary>
              <p className="m-2">Lorem ipsum dolor sit amet consectetur...</p>
            </details>
          </p>
        </details>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
