

const TableValidator = () => {
    return (
      <>
        <div className="overflow-auto xl:overflow-visible ">
          <table
            data-tw-merge=""
            className="w-full text-left border-b border-slate-200/60 rounded-t-md "
          >
            <thead data-tw-merge="" className="rounded-t-md">
              <tr data-tw-merge="" className="">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 w-5 rounded-tl-xl border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                >
                  Name
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                >
                  Slug
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 whitespace-nowrap border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500"
                >
                  Total Products
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500"
                >
                  Status
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 w-36 rounded-t-md border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500"
                >
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Jewelry
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Accessories, Ornaments, Luxury
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">/jewelry</div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.365</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Clothing
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Apparel, Fashion, Style
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">/clothing</div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.550</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Toys & Games
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Play, Entertainment, Fun
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">
                      /toys-and-games
                    </div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.221</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Furniture
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Home Decor, Interior, Comfort
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">/furniture</div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.739</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Electronics
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Gadgets, Tech, Electrical
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">/electronics</div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.946</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Home & Garden
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Decor, Furniture, Outdoor
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">
                      /home-and-garden
                    </div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.137</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-danger">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Inactive</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Books
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Reading, Literature, Knowledge
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">/books</div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.985</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Beauty & Personal Care
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Beauty, Personal Hygiene, Self-care
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">
                      /beauty-and-personal-care
                    </div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.140</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Food & Grocery
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Food, Groceries, Consumables
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">
                      /food-and-grocery
                    </div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.644</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-tw-merge="" className="[&_td]:last:border-b-0">
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <input
                    data-tw-merge=""
                    type="checkbox"
                    className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                  />
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="whitespace-nowrap font-medium" href="">
                    Sports & Outdoors
                  </a>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    Tags: Fitness, Recreation, Nature
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <a className="flex items-center text-primary" href="">
                    <i
                      data-tw-merge=""
                      data-lucide="external-link"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">
                      /sports-and-outdoors
                    </div>
                  </a>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-center dark:bg-darkmode-600"
                >
                  <div className="whitespace-nowrap">1.483</div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center text-success">
                    <i
                      data-tw-merge=""
                      data-lucide="database"
                      className="h-3.5 w-3.5 stroke-[1.7]"
                    ></i>
                    <div className="ml-1.5 whitespace-nowrap">Active</div>
                  </div>
                </td>
                <td
                  data-tw-merge=""
                  className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                >
                  <div className="flex items-center justify-center">
                    <div
                      data-tw-merge=""
                      data-tw-placement="bottom-end"
                      className="dropdown relative h-5"
                    >
                      <button
                        data-tw-toggle="dropdown"
                        aria-expanded="false"
                        className="cursor-pointer h-5 w-5 text-slate-500"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="more-vertical"
                          className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                        ></i>
                      </button>
                      <div
                        data-transition=""
                        data-selector=".show"
                        data-enter="transition-all ease-linear duration-150"
                        data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                        data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                        data-leave="transition-all ease-linear duration-150"
                        data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                        data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                        className="dropdown-menu absolute z-[9999] hidden"
                      >
                        <div
                          data-tw-merge=""
                          className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                        >
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                            <i
                              data-tw-merge=""
                              data-lucide="check-square"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Edit
                          </a>
                          <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                            <i
                              data-tw-merge=""
                              data-lucide="trash2"
                              className="stroke-[1] mr-2 h-4 w-4"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-reverse flex flex-col-reverse flex-wrap items-center gap-y-2 p-5 sm:flex-row">
          <nav className="mr-auto w-full flex-1 sm:w-auto">
            <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="chevrons-left"
                    className="stroke-[1] h-4 w-4"
                  ></i>
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="chevron-left"
                    className="stroke-[1] h-4 w-4"
                  ></i>
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  ...
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  1
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400"
                >
                  2
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  3
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  ...
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="chevron-right"
                    className="stroke-[1] h-4 w-4"
                  ></i>
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="chevrons-right"
                    className="stroke-[1] h-4 w-4"
                  ></i>
                </a>
              </li>
            </ul>
          </nav>
          <select
            data-tw-merge=""
            className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 rounded-[0.5rem] sm:w-20"
          >
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
      </>
    );
  };
  
  export default TableValidator;