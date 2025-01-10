import { CopyTheText } from "./helpers/CopyTheText";

export const Buttons = () => {
  const codeText = `<style>
    .buttonRed{
      background-color: red;
      padding: 16px;
      border: none;
    }
    .buttonGreen{
    background-color: green;
    padding: 16px;
      border: none;
     
    }
  .buttonGreen:hover{
    background-color: violet;
  }
    .buttonYellow{
    background-color: yellow;
    padding: 16px;
    }
        .buttonBlue{
    background-color: blue;
    padding: 16px;
    border-radius:50%;
    }
        .buttonWhite{
    background-color: white;
    width: 64px;
    height: 64px;
    padding: 1px;
    border-radius: 100%;
    }
</style>
  <div>
    <button class="buttonRed">Example Red</button>
    <button class="buttonGreen">Example Green</button>
    <button class="buttonYellow">Example Yellow</button>
    <button class="buttonBlue">Example Blue</button>
    <button class="buttonWhite">Example White</button>
  </div>
`;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Buttons
        </h2>
        <h4 className="text-xl">
          This is a demostration how to used a buttons. You can used a
          backgrouns color for a styled your button. The components is already
          to copy in the footer. Used a{" "}
          <span className="text-yellow-400">border:none</span>, to remove a
          border in the button, and you can use{" "}
          <span className="text-yellow-400">border-radius:value</span> for
          change the circumference
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0  ">
          <div className="flex w-full mt-4 gap-8">
            <div className="flex justify-between h-full w-full">
              <button className="p-4 bg-red-600">Example Red</button>
              <button className="p-4 bg-green-600">Example Green</button>
              <button className="p-4 bg-yellow-600">Example Yellow</button>
              <button className="p-4 bg-blue-600 rounded-3xl">
                Example Blue
              </button>
              <button className="w-20 h-20 p-1 bg-white text-black rounded-full">
                Example White
              </button>
            </div>
          </div>
        </article>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
