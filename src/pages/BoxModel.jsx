export const BoxModel = () => {
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Box Model
        </h2>
        <h4 className="text-xl">
          {" "}
          This is a demostration how to used a box model in css, the box-model
          consists of: content, padding, margin and borders. The image below
          illustrates the box model.
        </h4>
        <article
          className="flex flex-col
       justify-between items-center w-full h-full p-0 m-0 "
        >
          <div className="flex flex-col w-full mt-4 gap-8">
            <div className="flex flex-col justify-between h-full w-full">
              <img className="rounded-sm" src="public\box_model.png" alt="" />
            </div>
            <div>
              <h4 className="text-xl text-yellow-300 font-bold">
                The explain different parts:
              </h4>
              <ul className="text-[1.05rem] m-2">
                <li>
                  <span className="text-blue-300">Content:</span> each box has a
                  rectangular content area, inside which any text, images, and
                  other content is displayed.
                </li>
                <li>
                  <span className="text-blue-300">Padding: </span>
                  clears an area around the content
                </li>
                <li>
                  <span className="text-blue-300">Margin: </span>a buffer area
                  that separates the interior of the CSS box model from other
                  HTML elements on a page
                </li>
                <li>
                  <span className="text-blue-300">Border: </span>a border that
                  goes around the padding and content. The border marks the end
                  of the padding area.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-yellow-300 font-bold">Example:</h4>
              <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg">
                <code>
                  <span className="text-yellow-300">.div</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">width</span>:
                  120px;
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-blue-300">margin</span>: 16px;
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-blue-300">padding</span>: 16px;
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-blue-300">border</span>: 1px solid
                  black;
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
