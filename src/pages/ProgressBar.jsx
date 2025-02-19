import { CopyTheText } from "./helpers/CopyTheText";
export const ProgressBar = () => {
  const scrollbarUpdate = () => {
    const valueScrollBar = document.querySelector("#valueScrollBar");
    const progressBarDiv = document.querySelector("#progressBarDiv");
    let width = 25;
    const interval = setInterval(() => {
      if (width < 100) {
        width++;
        progressBarDiv.style.width = width + "%";
        valueScrollBar.innerHTML = width * 1 + "%";
      } else {
        clearInterval(interval);
      }
    }, 10);
  };
  const progressBar = `
<script>
const scrollbarUpdate = () => {
    const valueScrollBar = document.querySelector("#valueScrollBar");
    const progressBarDiv = document.querySelector("#progressBarDiv");
    let width = 25;
    const interval = setInterval(() => {
      if (width < 100) {
        width++;
        progressBarDiv.style.width = width + "%";
        valueScrollBar.innerHTML = width * 1 + "%";
      } else {
        clearInterval(interval);
      }
    }, 10);
  };
</script>
<button class="progress-button" onclick="scrollbarUpdate()">
  Click to 100%
</button>

<div class="progress-container">
  <div class="progress-bar" id="progressBarDiv">
    <span class="progress-text" id="valueScrollBar">25%</span>
  </div>
</div>
<style>
.progress-button {
  padding: 0.5rem;
  background-color: #fca5a5;
  width: 6rem;
  border-radius: 0.375rem;
  color: black;
  border: none;
  cursor: pointer;
}

.progress-container {
  background-color: white;
  border: 1px solid gray;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
}

.progress-bar {
  background-color: #20ff72;
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-text {
  font-weight: bold;
  color: #1f2937;
}

</style>
  `;
  const progressRounded = `//Rounded ProgressBar
<div class="progress-container">
  <div class="progress-background"></div>
  <div class="progress-circle"></div>
  <span class="progress-text">50%</span>
</div>
<style>
.progress-container {
  position: relative;
  width: 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-background {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.progress-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#22c55e 50%, gray 25%);
  mask-image: radial-gradient(circle, transparent 60%, black 61%);
}

.progress-text {
  font-weight: bold;
  color: black;
  position: relative;
}
</style>
  `;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Progress Bar
        </h2>
        <h4 className="text-xl">
          A normal &lt;div&gt; element can be used for a progress bar. The
          element div has simulated a progress bar, to use click in the button
          to completed 100%.
        </h4>

        <article className="mt-6 grid grid-cols-1 items-center justify-center w-full h-full p-0 m-0 gap-3 text-[1rem] ">
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "75%" }}
            >
              <span className="font-bold text-gray-900">75%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "50%" }}
            >
              <span className="font-bold text-gray-900">50%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "25%" }}
            >
              <span className="font-bold text-gray-900">25%</span>
            </div>
          </div>
          <h4 className="text-yellow-300 font-bold text-xl">Example</h4>
          <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mt-2 overflow-x-auto">
            <code>
              <span className="text-blue-300">
                &lt;div{" "}
                <span className="text-green-300">
                  class="w-full bg-white h-10"
                </span>
                &gt;
              </span>
              <br />
              <span className="text-blue-300">
                &nbsp;&lt;div{" "}
                <span className="text-green-300">
                  class="w-[50%] bg-green-300 h-10"
                </span>
                &gt;
              </span>
              <span className="text-gray-300">&nbsp;50%</span>
              <span className="text-blue-300">&nbsp;&lt;/div&gt;</span>
              <br />
              <span className="text-blue-300">&lt;/div&gt;</span>
            </code>
          </pre>
        </article>
        <article className="mt-6 grid grid-cols-1 items-center justify-center w-full h-full p-0 m-0 gap-3 text-[1rem]">
          <h4 className="text-yellow-300 font-bold text-xl">
            Progress Bar to 100%
          </h4>
          <button
            className="p-2 bg-red-300 w-24 rounded-md text-black border-none"
            onClick={scrollbarUpdate}
          >
            Click to 100%
          </button>
          <div className="bg-white border border-gray-500 w-full h-10 flex items-center">
            <div
              className="bg-[#20ff72] h-full flex items-center justify-center"
              style={{ width: "25%" }}
              id="progressBarDiv"
            >
              <span className="font-bold text-gray-900" id="valueScrollBar">
                25%
              </span>
            </div>
          </div>
          <details className="border-2 w-full mt-4 rounded-lg bg-gray-900 p-2">
            <summary className="font-semibold">Copy the Code</summary>
            <CopyTheText codeText={progressBar} />
          </details>
        </article>
        <article className="mt-6 flex flex-col items-center justify-center w-full h-full p-0 m-0 gap-3 text-[1rem]">
          <h4 className="text-yellow-300 font-bold text-xl">
            Progress Rounded
          </h4>
          <div className="flex items-center justify-center gap-8">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full"></div>
              <div
                className="absolute w-full h-full rounded-full"
                id="progressBarDiv"
                style={{
                  background: "conic-gradient(#22c55e 25%, gray 25%)",
                  maskImage:
                    "radial-gradient(circle, transparent 60%, black 62%)",
                }}
              ></div>
              <span className="font-bold text-white" id="valueScrollBar">
                25%
              </span>
            </div>
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full"></div>
              <div
                className="absolute w-full h-full rounded-full"
                style={{
                  background: "conic-gradient(#22c55e 50%, gray 25%)",
                  maskImage:
                    "radial-gradient(circle, transparent 60%, black 62%)",
                }}
              ></div>
              <span className="font-bold text-white">50%</span>
            </div>
          </div>
          <details className="border-2 w-full mt-4 rounded-lg bg-gray-900 p-2">
            <summary className="font-semibold">Copy the Code</summary>
            <CopyTheText codeText={progressRounded} />
          </details>
        </article>
      </div>
    </section>
  );
};
