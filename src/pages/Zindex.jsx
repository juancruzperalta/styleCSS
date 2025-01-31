import { CopyTheText } from "./helpers/CopyTheText";

export const Zindex = () => {
  const codeText = `<style>
.box{
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  width: 300px;
  height: 300px;
}
img{
  width: 300px;
  height: 300px;
  z-index: 1;
  opacity: 70%;
  position: relative;
  border-radius: .25rem;
}
.parraf{
  z-index: 2;
  color: black;
  position: absolute;
  bottom: 0;
  font-weight: bold;
}
</style>
<div class="box">
  <img src="" alt="img"/>
  <p class="parraf">Because the image has a z-index of 1,
  and the parraf has a z-index of 2, this is superimposed</p>
</div>`;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Z-index
        </h2>
        <h4 className="text-xl">
          {" "}
          This is a demostration how to used a z-index in css, the z-index
          consists in position the element about other element.
        </h4>
        <article
          className="flex flex-col
       justify-between items-center w-full h-full p-0 m-0 "
        >
          <div className="flex flex-col w-full mt-4 gap-8">
            <div className="flex flex-col justify-between h-full w-full">
              <pre className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg">
                <code>
                  <span className="text-yellow-300">z-index</span>:
                  <span className="text-blue-300">
                    &nbsp; auto | entero | inheret{" "}
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <article className="flex gap-4">
            <div className="flex justify-center items-center gap-4 mt-4 relative">
              <img
                src="/golden.jpg"
                className="z-[1] w-[300px] h-[300px] relative opacity-70 rounded-md"
                alt="Golden retriever"
              />
              <p className="z-[2] text-gray absolute bottom-0  font-bold p-2">
                Because the image has a z-index of 1 and the parraf has a
                z-index of 2, this is superimposed
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 relative">
              <img
                src="/borderCollie.avif"
                className="z-[1] w-[300px] h-[300px] relative opacity-70 rounded-md"
                alt="Golden retriever"
              />
              <p className="z-[2] text-gray absolute bottom-0  font-bold p-2">
                Because the image has a z-index of 1 and the parraf has a
                z-index of 2, this is superimposed
              </p>
            </div>
          </article>
        </article>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
