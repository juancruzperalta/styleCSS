export const Accordions = () => {
  const codeCopy = () => {
    const copyText = document.getElementById("code").value;
    const textCopyInfo = document.getElementById("textCopy");
    navigator.clipboard.writeText(copyText).then(() => {
      textCopyInfo.classList.remove("hidden");
    });
    setTimeout(() => {
      textCopyInfo.classList.add("hidden");
    }, 1000);
  };

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Accordions</h2>
        <h4 className="text-xl">How to use the accordion </h4>

        <details
          className="w-[700px] border border-slate-100 border-opacity-80 max-w-[700px] mt-4 rounded-md bg-gray-800 p-1"
          open
        >
          <summary className="font-semibold">Title example</summary>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            magnam veniam eaque excepturi. Placeat ut asperiores nemo la..
          </p>
        </details>
        {/* Example 2 */}
        <details className="w-[700px] border border-slate-100 border-opacity-80 max-w-[700px] mt-4 rounded-md bg-gray-800 p-1">
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
      <div className="w-[100%] max-w-[700px]  h-full relative flex flex-col">
        <textarea
          type="text"
          value={`<details 
    className="w-[700px] border border-slate-100 border-opacity-80 max-w-[700px] mt-4 rounded-md bg-gray-800 p-1" open>
    <summary className="font-semibold">Title example</summary>
    <p className="m-4">Into your text...</p>
</details>`}
          id="code"
          className="bg-slate-900 h-40 w-[100%] max-w-[700px] border-slate-100 border-[0.5px] border-opacity-40 rounded-md p-2  resize-none overflow-hidden outline-none"
        />
        <button
          className="absolute right-0 bottom-0 bg-slate-800 p-1 rounded-sm hover:bg-slate-500"
          onClick={codeCopy}
        >
          Copy Text
        </button>
      </div>
      <p className="text-center hidden pt-2" id="textCopy">
        ¡Texto copiado al portapapeles!
      </p>
    </section>
  );
};
