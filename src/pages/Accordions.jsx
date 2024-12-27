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
    <section className="flex flex-col items-center mt-8 max-w-[700px]  sm:max-w-[500px]">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Accordions</h2>
        <h4 className="text-xl">How to use the accordion </h4>

        <details
          className="w-[700px] border border-slate-100 border-opacity-80 max-w-[700px]  sm:max-w-[500px] mt-4 rounded-md bg-gray-800 p-1"
          open
        >
          <summary className="font-semibold">Title example</summary>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            magnam veniam eaque excepturi. Placeat ut asperiores nemo la..
          </p>
        </details>
        {/* Example 2 */}
        <details className="w-[700px] border border-slate-100 border-opacity-80 max-w-[700px] sm:max-w-[500px] mt-4 rounded-md bg-gray-800 p-1">
          <summary className="font-semibold">Example two</summary>
          <p className="m-1">
            Lorem ipsum dolor sit amet consectetur...
            <details className="w-full border border-slate-100 border-opacity-80 max-w-[700px] rounded-md bg-gray-800 p-1">
              <summary className="font-semibold">Example two</summary>
              <p className="m-2">Lorem ipsum dolor sit amet consectetur...</p>
            </details>
          </p>
        </details>
      </div>
      <CopyTheText codeText={codeText} />
    </section>
  );
};
