import { CopyTheText } from "./helpers/CopyTheText";

export const ScrollEffects = () => {
  const codeText = `<article class="container">
    <div class="section yellow" id="section1">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        laborum exercitationem repudiandae error nam animi ad a aliquid
        expedita cum vitae autem quibusdam neque officiis ipsa, similique
        iste excepturi praesentium?
      </p>
      <a href="#section2" class="button">Go to Section 2</a>
    </div>
    <div class="section green" id="section2">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        laborum exercitationem repudiandae error nam animi ad a aliquid
        expedita cum vitae autem quibusdam neque officiis ipsa, similique
        iste excepturi praesentium?
      </p>
      <a href="#section1" class="button">Go to Section 1</a>
    </div>
  </article>

  <style>
  html {
    scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.section {
  width: 100%;
  height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: red;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.button:hover {
  background-color: darkred;
  color: white;
  </style>
}`;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Scroll Effects
        </h2>
        <h4 className="text-xl">
          The scroll-behavior property in CSS allows us to define whether the
          scroll location of the browser jumps to a new location or smoothly
          animates
        </h4>
        <pre className="bg-[#1b1b1b] p-4 rounded-lg shadow-lg mb-6 mt-4 text-[0.9rem]">
          <code>
            <span className="text-yellow-300">html</span> {"{"} <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            auto; <span className="text-gray-300">/*default*/</span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            smooth;{" "}
            <span className="text-gray-300">/*smooth scrolling...*/</span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            inherit;{" "}
            <span className="text-gray-300">
              /* inherits the behavior of the father*/
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            initial;
            <span className="text-gray-300">
              /*resets the property to default (auto)*/
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            revert;{" "}
            <span className="text-gray-300">
              /*resets the property to the browser's value */
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            revert-layer;{" "}
            <span className="text-gray-300">
              /*resets the property to the browser's value */
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">scroll-behavitor</span>:
            unset;{" "}
            <span className="text-gray-300">
              /*depends on inherited value */
            </span>
            <br />
            {"}"}
          </code>
        </pre>
        <article className="mt-6 grid grid-cols-1 items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <div className="bg-yellow-300 p-2 w-full h-[600px]" id="section1">
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              laborum exercitationem repudiandae error nam animi ad a aliquid
              expedita cum vitae autem quibusdam neque officiis ipsa, similique
              iste excepturi praesentium?
            </p>
            <a
              href="#section2"
              className="w-full p-2 mt-2 bg-red-300 text-black"
            >
              Go to Section 2
            </a>
          </div>
          <div className="bg-green-300 p-2 w-full h-[600px]" id="section2">
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              laborum exercitationem repudiandae error nam animi ad a aliquid
              expedita cum vitae autem quibusdam neque officiis ipsa, similique
              iste excepturi praesentium?
            </p>
            <a
              href="#section1"
              className="w-full p-2 mt-2 bg-red-300 text-black"
            >
              Go to Section 1
            </a>
          </div>
        </article>{" "}
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
