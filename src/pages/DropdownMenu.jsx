export const DropdownMenu = () => {
  const codeCopy = () => {
    const copyText = codeText;
    const textCopyInfo = document.getElementById("textCopy");
    navigator.clipboard.writeText(copyText).then(() => {
      textCopyInfo.classList.remove("hidden");
    });
    setTimeout(() => {
      textCopyInfo.classList.add("hidden");
    }, 1000);
  };
  const codeText = `const codeCopy = () => {
  const copyText = document.getElementById("code").value;
  const textCopyInfo = document.getElementById("textCopy");
  navigator.clipboard.writeText(copyText).then(() => {
    textCopyInfo.classList.remove("hidden");
  });
  setTimeout(() => {
    textCopyInfo.classList.add("hidden");
  }, 1000);
};


<div className="flex justify-around w-[100%] max-w-[700px]">
  <div className="p-2 flex items-center justify-center flex-col group">
    <button className="bg-green-600 p-2 rounded-sm w-[100%] hover:bg-green-500">
      Dropdown Menu
    </button>
    <div
      className="flex flex-col pt-2 w-[100%] pl-2 opacity-0 bg-slate-100 text-gray-800 transform scale-y-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-y-100 origin-top"
      id="dropdownMenu"
    >
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>`;

  return (
    <section className="flex flex-col  items-center mt-8">
      <div className="mb-8 max-w-[700px]">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">
          Dropdown Menu
        </h2>
        <h3 className="text-yellow-300 font-bold text-3xl mb-4">Example</h3>
        <h4 className="text-xl">
          How to use the dropdown menu, click in the button green and the menu
          has been open.{" "}
        </h4>
      </div>
      <div className="flex justify-around w-[100%] max-w-[700px]">
        <div className="p-2 flex items-center justify-center flex-col group">
          <button className="bg-green-600 p-2 rounded-sm w-[100%] hover:bg-green-500">
            Dropdown Menu
          </button>
          <div
            className="flex flex-col pt-2 w-[100%] pl-2 opacity-0  bg-slate-100 text-gray-800 transform scale-y-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-y-100 origin-top"
            id="dropdownMenu"
          >
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="flex justify-around w-[100%] max-w-[700px]">
        <div className="p-2 flex items-center justify-center flex-col">
          <button className="bg-green-600 p-2 rounded-sm w-[100%] hover:bg-green-500">
            Dropdown Menu
          </button>
          <div
            className="flex flex-col pt-2 w-[100%] pl-2 bg-slate-100 text-gray-800"
            id="dropdownMenu"
          >
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="w-[100%] max-w-[700px]  h-full relative flex flex-col">
        <pre className="bg-gray-900 text-white p-4 rounded w-full max-w-[700px] overflow-x-auto whitespace-pre mt-4">
          <code>{codeText}</code>
        </pre>
        <button
          className="absolute right-0 bottom-0 bg-slate-800 p-1 rounded-sm hover:bg-slate-500"
          onClick={codeCopy}
        >
          Copy Text
        </button>
        <p
          className="text-center hidden pt-2 absolute bottom-4 right-0 left-0"
          id="textCopy"
        >
          ¡Texto copiado al portapapeles!
        </p>
      </div>
    </section>
  );
};
