import { CopyTheText } from "./helpers/CopyTheText";

export const Forms = () => {
  const codeText = `<style>
  input[type="text"]{
    width: 260px;
    outline: none;
    border: 1px solid gray;
    padding: 4px;
    height: 32px;
    border-radius: .5rem;
  }
    form{
      display:flex;
      gap: 0.5rem;
    }
  </style>
  <form>
    <input type="text" placeholder="FirstName">
    <input type="text" placeholder="LastName">
  </form>`;
  const codeTextSearch = `<style>form{
      display:flex;
      gap: 1rem;
    }
    input[type="text"]{
    width: 260px;
    outline: none;
    height: 18px;
    border-radius: .5rem;
    transition: width ease-in-out 1s;
    padding: .5rem;
    padding-left: 2.3rem;
    background-color: #f8fafc;
    background-image:  url('public/images/png');
    background-size: 26px;
    background-position: 2px center;
    background-repeat: no-repeat;
    }
    </style>
    <form>
    <input type="text" placeholder="Search">
    </form>`;
  const codeTextSelect = `<style>
    div form{
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      color: #020617;
      font-weight: 600;
      background-color: #cecece5e;
      padding: 24px;
      border-radius: 0.5rem;
     }
    select{
      outline: none;
      padding: 8px;
      margin-top: 6px;
      background-color: #d6d4d4;
      width: full;
      display: inline-block;
      border-radius: .5rem;
      }
   </style>
  <div>
    <form>
      <label for="country">
      Country
      </label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </form>
 </div>
  `;
  return (
    <section className="flex flex-col mt-8  lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Forms</h2>
        <h4 className="text-xl">
          {" "}
          This is a demostration how to used a input. The components is already
          to copy in the footer.
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] ">
          <div className="flex flex-col w-full mt-4 gap-8">
            <div className="flex flex-col justify-between h-full w-full">
              <h3 className="text-yellow-300 font-bold text-2xl">Input</h3>
              <h4 className="text-lg">
                The fields are to fill the user information, such as the
                firstName or lastName
              </h4>
              <form className="flex gap-2 mt-3">
                <input
                  type="text"
                  placeholder="FirstName"
                  className="w-[260px] outline-none p-1 h-8 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="LastName"
                  className="w-[260px] outline-none p-1 h-8 rounded-sm"
                />
              </form>
              <details className="border border-slate-100 border-opacity-80 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] w-full 2xl:max-w-[1200px] mt-4 rounded-md bg-gray-800 p-1 transition ease-in-out">
                <summary className="font-semibold">Copy the Code</summary>
                <CopyTheText codeText={codeText} />
              </details>
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <h3 className="text-yellow-300 font-bold text-2xl">
                Input Search
              </h3>
              <h4 className="text-lg">The fields are to fill for search</h4>
              <form className="flex gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[260px] outline-none h-8 rounded-sm focus:w-full focus:bg-slate-200 transition-[width] ease-in-out focus:text-black p-1 pl-10 bg-slate-50"
                  style={{
                    backgroundImage: "url('../../public/images.png')",
                    backgroundSize: "26px",
                    backgroundPosition: "2px center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </form>
              <details className="border border-slate-100 border-opacity-80 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] w-full 2xl:max-w-[1200px] mt-4 rounded-md bg-gray-800 p-1 transition ease-in-out">
                <summary className="font-semibold">Copy the Code</summary>
                <CopyTheText codeText={codeTextSearch} />
              </details>
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <h3 className="text-yellow-300 font-bold text-2xl">
                Input Select
              </h3>
              <h4 className="text-lg">Select one option for preference</h4>
              <div className="flex flex-col h-full w-full text-slate-950 font-semibold text-base bg-[#cecece5e] p-4 rounded-md">
                <form className="mt-3">
                  <label className="">Country</label>
                  <select
                    id="country"
                    name="country"
                    className="outline-none p-2 mt-2 bg-[#d6d4d4] w-full block rounded-sm"
                  >
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
                </form>
              </div>
              <details className="border border-slate-100 border-opacity-80 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] w-full 2xl:max-w-[1200px] mt-4 rounded-md bg-gray-800 p-1 transition ease-in-out">
                <summary className="font-semibold">Copy the Code</summary>
                <CopyTheText codeText={codeTextSelect} />
              </details>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
