import { CopyTheText } from "./helpers/CopyTheText";

export const DropdownMenu = () => {
  const codeText = `<style>
    .dropdownMenu{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width:160px;
    }
    button{
      background-color: #16a34a; 
      width:100%;
      height: 40px;
      border-radius: .125rem;
      border:0;
    }
    button:hover{
      background-color: #22c55e;
    }
    .menuLink{
    display: none;
    flex-direction: column;
    padding-top: .5rem;
    width: 100%;
    background-color: #f1f5f9;
    color: #1f2937;
      border: 0
      border-top: 0;
      border-radius: .125rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .dropdownMenu:hover .menuLink{
      display:flex;
    }
    .menuLink a{
      text-decoration: none;
      color: #1f2937;
      margin: 5px 0;
      margin-left: .5rem;
    }
    .menuLink a:hover {
      color: #16a34a;
    }
  }
    </style>
      <h2>Dropdown Menu</h2>
      <div class="container">
        <div class="dropdownMenu">
          <button>Dropdown Menu</button>
          <div class="menuLink">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
          </div>
        </div>
      </div>
`;

  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800">
        <div className="mb-8 w-full  items-center">
          <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2">
            Dropdown Menu
          </h2>
          <h4 className="text-xl">
            How to use the dropdown menu, click in the button green and the menu
            has been open. The components is already to copy in the footer.
          </h4>
        </div>
        <article className="flex items-center justify-between w-full h-full p-0 m-0  ">
          <div className="flex justify-around ">
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
          <div className="flex justify-around ">
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
        </article>
        <CopyTheText codeText={codeText} />
      </div>
    </section>
  );
};
