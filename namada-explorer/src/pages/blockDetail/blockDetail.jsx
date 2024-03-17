import { Info } from 'lucide-react';

const BlockDetail = () => {
  return (
    <>
      <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-10 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
        <div className="px-5 mt-16">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              {/* 111 */}
              <div className="col-span-12 xl:col-span-12">
                <div>
                  <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                    <div className="text-base font-medium group-[.mode--light]:text-white">
                      Block Overview
                    </div>
                  </div>
                  <div className="box box--stacked mt-2 p-5">
                    <div className=" rounded-lg border border-slate-200/80">
                      <div className="overflow-auto xl:overflow-visible">
                        <table data-tw-merge="" className="w-full text-left">
                          <tbody>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Chain ID
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">thông tin</div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Block Height
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">thông tin</div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Timestamp
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">Thông tin</div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Total Transaction
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">thông tin</div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Proposer
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">Thông tin</div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center whitespace-nowrap">
                                  Block Hash
                                  <Info className="ml-1.5 h-4 w-4 text-slate-400"></Info>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed border-slate-300/70 py-4 dark:bg-darkmode-600"
                              >
                                <div className="text-center">
                                  AAE9A13339C0D0AFDCF9D4AF7E4F246D4F8B54F396743D271AA7F3541A4EE4DE{" "}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 222 */}
              <div className="col-span-12 xl:col-span-12">
                <div>
                  <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                    <div className="text-base font-medium ">
                      Block Signatures
                    </div>
                  </div>
                  <div className="box box--stacked mt-2 p-5">ok 2 2 2</div>
                </div>
              </div>
              {/* 333 */}
              <div className="col-span-12 xl:col-span-12">
                <div>
                  <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                    <div className="text-base font-medium">
                      Block Transactions
                    </div>
                  </div>
                  <div className="box box--stacked mt-2 p-5">ok 3 3 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockDetail;
