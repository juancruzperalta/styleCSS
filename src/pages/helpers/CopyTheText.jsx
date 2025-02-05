// eslint-disable-next-line react/prop-types
export const CopyTheText = ({ codeText }) => {
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
  return (
    <div className="w-[100%] h-full relative flex flex-col mt-4 overflow-x-auto">
      <pre className="bg-gray-900 text-white p-4 rounded w-full overflow-x-auto whitespace-pre mt-4 mb-4 ">
        <code>{codeText}</code>
      </pre>
      <button
        className="absolute  right-0 left-0 bottom-0 bg-slate-700 p-1 rounded-sm hover:bg-slate-500"
        onClick={codeCopy}
      >
        Copy Text
      </button>
      <p
        className="text-center hidden  absolute bottom-8 right-0 left-0"
        id="textCopy"
      >
        ¡Texto copiado al portapapeles!
      </p>
    </div>
  );
};
