import { CopyTheText } from "./helpers/CopyTheText";

export const Alerts = () => {
  const codeText = `<style>
  .btnClose{
  position: absolute;
  right: 0.5rem;
  font-size: 2.25rem;
  cursor:pointer
  }
  .information{
    float: left;
    margin-left: 0.5rem;
    font-weight: 600;
    margin-right: 0.5rem;
  }
  #alertDiv{
    background-color: #22c55e;
    color: black;
    padding: 16px;
    border-radius: 2px;
    position: relative;
    display: flex;
    align-items: center;
  }
  </style>
  <div id="alertDiv">
    <span class="information">Okay</span>
    this is a message ad for you
    <span class="btnClose"
      onClick={closeAlert(event)}
    >
      &times;
    </span>
</div>
<script>
  const closeAlert = (e) => {
    const clickedAlert = e.target.closest("#alertDiv");
    if (clickedAlert) {
      clickedAlert.style.transition = "opacity 1s ease-in-out";
      clickedAlert.style.opacity = 0;
      setTimeout(() => {
        clickedAlert.style.display = "none";
      }, 1000);
    }
  };
</script>
  `;
  const closeAlert = (e) => {
    const clickedAlert = e.target.closest("#alertDiv");
    if (clickedAlert) {
      clickedAlert.style.transition = "opacity 1s ease-in-out";
      clickedAlert.style.opacity = 0;
      setTimeout(() => {
        clickedAlert.style.display = "none";
      }, 1000);
    }
  };
  return (
    <section className="flex flex-col mt-8  lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Alerts</h2>
        <h4 className="text-xl">
          The use the alerts to information a user error, warning or information
          correct.
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] ">
          <div className="flex flex-col w-full gap-4 mt-4">
            <div
              className="bg-red-700 text-black p-4 rounded-sm  transition relative flex items-center"
              id="alertDiv"
            >
              <span className="float-left  mr-2 font-semibold">Error</span>
              this is a message ad for you
              <span
                className="absolute right-2 text-4xl cursor-pointer"
                onClick={closeAlert}
              >
                &times;
              </span>
            </div>
            <div
              className="bg-yellow-400 text-black p-4 rounded-sm transition  relative flex items-center"
              id="alertDiv"
            >
              <span className="float-left  mr-2 font-semibold">Warning</span>
              this is a message ad for you
              <span
                className="absolute right-2 text-4xl cursor-pointer"
                onClick={closeAlert}
              >
                &times;
              </span>
            </div>
            <div
              className=" bg-green-500 text-black p-4 rounded-sm transition  relative flex items-center"
              id="alertDiv"
            >
              <span className="float-left  mr-2 font-semibold">Okay</span>
              this is a message ad for you
              <span
                className="absolute right-2 text-4xl cursor-pointer"
                onClick={closeAlert}
              >
                &times;
              </span>
            </div>
          </div>
        </article>
      </div>
      <CopyTheText codeText={codeText} />
    </section>
  );
};
