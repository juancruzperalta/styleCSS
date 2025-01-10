import { CopyTheText } from "./helpers/CopyTheText";

export const Cards = () => {
  const codeText = `<style>
html{
background-color: black;
}
    img{
      width: 290px;
      height: 260px;
      border-radius: 0.125rem;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .container{
      width: 290px;
      background-color: #f1f5f9;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
      border-bottom-right-radius: 0.125rem;
      border-bottom-left-radius: 0.125rem;
    }
    p,h4{
      color:black;
      padding:12px;
      margin:0;
    }
  p{
      padding-top: 4px;
  }
  .containerSup{
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  </style>
<div class="containerSup">
  
  <div>
    <img src="yourPic"
      alt=""
    />
    <div class="container">
      <h4>
        <b>Teo</b>
      </h4>
      <p>A Beautiful Dog</p>
    </div>
  </div>
    <div>
    <img src="yourPic"
      alt=""
    />
    <div class="container">
      <h4>
        <b>Teo</b>
      </h4>
      <p>A Beautiful Dog</p>
    </div>
  </div>
</div>`;
  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
          Cards
        </h2>
        <h4 className="text-xl">
          The use of a card is a beautiful in your design of page. You can use a
          information of human, animals, also presentation a project, etc...
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0  ">
          <div className="flex justify-around w-full mt-4">
            <div>
              <img
                src="../public/golden.jpg"
                alt=""
                className="w-[290px] h-[260px]  rounded-sm shadow-2xl shadow-black"
              />
              <div className="bg-slate-100 shadow-2xl shadow-black rounded-b-sm">
                <h4 className="text-2xl text-black p-3 ">
                  <b>Mora</b>
                </h4>
                <p className="p-3 pt-1 text-black">A Beautiful Dog</p>
              </div>
            </div>
            <div>
              <img
                src="../public/borderCollie.avif"
                alt=""
                className="w-[290px] h-[260px] rounded-sm  shadow-2xl shadow-black"
              />
              <div className="bg-slate-100 shadow-2xl shadow-black rounded-b-sm">
                <h4 className="text-2xl text-black p-3">
                  <b>Teo</b>
                </h4>
                <p className="p-3 pt-1 text-black">A Beautiful Dog</p>
              </div>
            </div>
          </div>
        </article>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
