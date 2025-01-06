import { CopyTheText } from "./helpers/CopyTheText";

export const Tabs = () => {
  const codeText = `<style>
  tr, td{
    outline: 1px solid black;
    padding: 12px;
  }
  th{
    padding:14px;
  }
  </style>
  <table>
    <tr>
      <th>Title Example 1</th>
    </tr>
    <tr>
      <td>Example 1</td>
      <td>Example 2</td>
    </tr>
  </table>`;
  const codeText2 = `<style>
  td{
    padding: 12px;
  }
    tr{
      padding:12px;
      padding-left: 0px;
      outline: 1px solid black;
      display: flex;
      flex-direction: column; 
    }
    th{
      padding:14px;
    }
  </style>
  <table>
    <tr>
      <th>Title Example 2</th>
    </tr>
    <tr>
      <td>Example 1</td>
      <td>Example 2</td>
    </tr>
  </table>
  `;
  return (
    <section className="flex flex-col mt-8  lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full">
      <div className="mb-8">
        <h2 className="text-yellow-300 font-bold text-3xl mb-4">Tabs</h2>
        <h4 className="text-xl">
          This is a demonstration of how tabs can be used. The components is
          already to copy in the footer.
        </h4>
        <article className="flex items-center justify-between w-full h-full p-0 m-0 lg:max-w-[700px] md:max-w-[500px] max-w-[300px] xl:max-w-[900px] 2xl:max-w-[1200px] ">
          <div className="flex w-full mt-4 gap-8">
            <div className="flex flex-col justify-center h-full w-full">
              <h3 className="text-yellow-300 font-bold text-xl">Example 1</h3>
              <table className="border border-slate-200">
                <tr>
                  <th className="p-4 pl-0">Title example 1</th>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 ">Example 2</td>
                  <td className="border border-slate-200 p-4 ">Example 3</td>
                </tr>
              </table>
              <CopyTheText codeText={codeText} />
            </div>
            <div className="flex flex-col h-full w-full">
              <h3 className="text-yellow-300 font-bold text-xl">Example 2</h3>
              <table className="flex flex-col border border-collapse">
                <tr className="p-4 border-b-2">
                  <th>Title example 2</th>
                </tr>
                <tr className="flex flex-col">
                  <td className="p-4">Example 2</td>
                  <td className="p-4">Example 3</td>
                </tr>
              </table>
              <CopyTheText codeText={codeText2} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
