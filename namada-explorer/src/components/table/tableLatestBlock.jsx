const TableLatestBlock = () => {
    return (
      <>
         <div className="overflow-x-auto overflow-y-auto">
          <table data-tw-merge className="w-full text-left ">
            <thead data-tw-merge className="bg-slate-200/60 dark:bg-slate-200">
              <tr
                data-tw-merge
                className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
              >
                <th
                  data-tw-merge
                  className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
                >
                  #
                </th>
                <th
                  data-tw-merge
                  className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
                >
                  First Name
                </th>
                <th
                  data-tw-merge
                  className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
                >
                  Last Name
                </th>
                <th
                  data-tw-merge
                  className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
                >
                  Username
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                data-tw-merge
                className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
              >
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  1
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Angelina
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Jolie
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  @angelinajolie
                </td>
              </tr>
              <tr
                data-tw-merge
                className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
              >
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  2
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Brad
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Pitt
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  @bradpitt
                </td>
              </tr>
              <tr
                data-tw-merge
                className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
              >
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  3
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Charlie
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  Hunnam
                </td>
                <td
                  data-tw-merge
                  className="px-5 py-3 border-b dark:border-darkmode-300 border-l border-r border-t"
                >
                  @charliehunnam
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default TableLatestBlock;
  