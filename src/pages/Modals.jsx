import { CopyTheText } from "./helpers/CopyTheText";

export const Modals = () => {
  const codeText = `<script>
          function openModal() {
            document.getElementById("contentModal").classList.remove("hidden");
        }

        function closeModal() {
            document.getElementById("contentModal").classList.add("hidden");
        }
  </script>

  //HTML
  
  <button class="btn-open" onclick="openModal()">Open Modal</button>
    <div class="modal-overlay" id="contentModal">
        <div class="modal-container">
            <div class="modal-content">
                <span class="modal-icon">
                    //iconSVG
                </span>
                <p class="modal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...!</p>
                <button class="btn-close" onclick="closeModal()">Close Modal</button>
            </div>
        </div>
    </div>
    
  //CSS
<style>
.btn-open, .btn-close {
    background-color: #22c55e;
    padding: 10px;
    color: black;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}

.btn-open:hover, .btn-close:hover {
    background-color: #16a34a;
}

.modal-overlay {
    background-color: rgba(0, 0, 0, 0.52);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: none;
    align-items: center;
    justify-content: center;
}

.modal-overlay:not(.hidden) {
    display: flex;
}

.modal-container {
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 200px;
    border-radius: 5px;
    position: relative;
    padding: 20px;
}

.modal-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
}

.modal-icon {
    width: 64px;
    height: 64px;
    background-color: #22c55e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -24px;
}

.icon {
    width: 40px;
    height: 40px;
    fill: white;
}

.modal-text {
    color: black;
    padding: 10px;
}

.hidden {
    display: none;
}
</style> `;
  const openModal = () => {
    const contentModal = document.querySelector("#contentModal");

    if (contentModal.classList.contains("hidden")) {
      contentModal.classList.remove("hidden");
      contentModal.classList.add("flex");
    }
  };
  const closeModal = () => {
    const contentModal = document.querySelector("#contentModal");

    if (!contentModal.classList.contains("hidden")) {
      contentModal.classList.add("hidden");
    }
  };

  return (
    <section className="homeSection">
      <div className="mb-8 border border-gray-600 rounded-lg p-6 bg-gray-800 w-full">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
          Modals
        </h2>
        <h4 className="text-xl">
          A modal is a dialog box/popup window that is displayed on top of the
          current page
        </h4>
        <article className="mt-6 grid grid-cols-1  items-center justify-center w-full h-full p-0 m-0 gap-8 text-[1rem]">
          <h2 className="text-yellow-300 font-bold text-3xl mb-4 border-b-2 border-gray-600 pb-2 relative">
            Example
          </h2>
          <button
            className="bg-green-400 p-2 text-black rounded-md w-full"
            onClick={openModal}
          >
            Open Modal
          </button>
          <div
            className=" bg-[#00000084] hidden fixed w-full h-full left-0 top-0 right-0 bottom-0 z-10 items-center justify-center"
            id="contentModal"
          >
            <div className="bg-white flex items-center flex-col justify-center w-[340px] h-56 rounded-sm relative">
              <div className="w-[80%] flex flex-col items-center justify-evenly h-full ">
                <span className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center absolute -top-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-10 h-10"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span>
                <p className="text-black p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...!
                </p>
                <button
                  className="bg-green-400 p-2 text-black rounded-md w-full"
                  onClick={closeModal}
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <CopyTheText codeText={codeText} />
    </section>
  );
};
