import { CopyTheText } from "./helpers/CopyTheText";

export const Grids = () => {
  const codeText = `<style>
  .container{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0px, 1fr));
    width: 400px;
    height: 160px;
    color:black;
  }
  .box1{
    background-color: brown;
  }
  .box2{
    background-color: red;
  }
      .box3{
    background-color: green;
  }  .box4{
    background-color: yellow;
  }  .box5{
    background-color: blue;
  }  .box6{
    background-color: violet;
  }
</style>

<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
  <div class="box4">Box 4</div>
  <div class="box5">Box 5</div>
  <div class="box6">Box 6</div>
</div>`;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Grids
        </h2>
        <h4 className="text-lg">Define a display grid in the style css.</h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mb-6 mt-4">
          <code>
            <span className="text-yellow-300">.container</span> {"{"} <br />
            &nbsp;&nbsp;<span className="text-blue-300">display</span>: grid;
            <br />
            {"}"}
          </code>
        </pre>
        <h4 className="text-lg">
          Define a grid-template-columns and grid-template-rows. The values
          represent track size of grid. You use{" "}
          <strong className="text-yellow-300">1fr</strong> to make use of all
          size
        </h4>
        <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg mb-6 mt-4">
          <code>
            <span className="text-yellow-300">.container</span> {"{"} <br />
            &nbsp;&nbsp;
            <span className="text-blue-300">grid-template-columns</span>:&nbsp;
            <span className="text-gray-500 ">
              <br />
              /** 1fr 1fr,
              <br /> minmax(200px, 1fr), <br />
              repeat(5, 1fr) **/
            </span>
            <br />
            &nbsp;&nbsp;
            <span className="text-blue-300">grid-template-rows</span>:&nbsp;
            <span className="text-gray-500 ">
              <br />
              /** 1fr 1fr,
              <br /> 200px 1fr**/
            </span>
            <br />
            {"}"}
          </code>
        </pre>{" "}
        <article className="bg-[#dadada81] p-4 rounded-md mt-6 mb-4">
          <h2 className="text-yellow-300 font-bold text-xl mb-4">Example</h2>
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 ">
            <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg">
              <code>
                <span className="text-yellow-300">.container</span> {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-blue-300">display</span>:
                grid;
                <br />
                &nbsp;&nbsp;
                <span className="text-blue-300">grid-template-columns</span>:
                repeat(3, minmax(0, 1fr));
                <br />
                &nbsp;&nbsp;
                <span className="text-blue-300">grid-template-rows</span>:
                repeat(2, minmax(0px, 1fr));
                <br />
                {"}"}
              </code>
            </pre>
            <div className="grid w-[400px] h-[160px]  grid-cols-3 grid-rows-2 gap-1 text-black">
              <div className="bg-blue-200 w-full h-full p-2">1</div>
              <div className="bg-blue-300 w-full h-full p-2">2</div>
              <div className="bg-blue-400 w-full h-full p-2">3</div>
              <div className="bg-blue-500 w-full h-full p-2">4</div>
              <div className="bg-blue-600 w-full h-full p-2">5</div>
              <div className="bg-blue-700 w-full h-full p-2">6</div>
            </div>
          </div>
        </article>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
